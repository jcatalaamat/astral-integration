import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import emailjs from '@emailjs/browser';

const STORAGE_KEY = 'astral-freemium-user';
const DAILY_LIMIT_KEY = 'astral-daily-usage';

interface ToolUsage {
  unlockedAt: number;
  totalUsage: number;
}

interface FreemiumUser {
  email: string | null;
  createdAt: number;
  tools: Record<string, ToolUsage>;
}

interface DailyUsage {
  date: string;
  counts: Record<string, number>;
}

interface FreemiumContextType {
  user: FreemiumUser | null;
  isUnlocked: (toolId: string) => boolean;
  unlock: (toolId: string, email: string) => Promise<boolean>;
  getDailyUsage: (toolId: string) => number;
  incrementUsage: (toolId: string) => void;
  canUse: (toolId: string, dailyLimit?: number) => boolean;
  email: string | null;
}

const FreemiumContext = createContext<FreemiumContextType | null>(null);

const getTodayKey = () => new Date().toISOString().split('T')[0];

export function FreemiumProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FreemiumUser | null>(null);
  const [dailyUsage, setDailyUsage] = useState<DailyUsage>({ date: getTodayKey(), counts: {} });
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      const storedDaily = localStorage.getItem(DAILY_LIMIT_KEY);
      if (storedDaily) {
        const parsed = JSON.parse(storedDaily);
        // Reset if it's a new day
        if (parsed.date === getTodayKey()) {
          setDailyUsage(parsed);
        } else {
          setDailyUsage({ date: getTodayKey(), counts: {} });
        }
      }
    } catch (e) {
      console.error('Failed to load freemium data:', e);
    }
    setLoaded(true);
  }, []);

  // Save user to localStorage
  const saveUser = useCallback((newUser: FreemiumUser) => {
    setUser(newUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    } catch (e) {
      console.error('Failed to save user:', e);
    }
  }, []);

  // Save daily usage to localStorage
  const saveDailyUsage = useCallback((newUsage: DailyUsage) => {
    setDailyUsage(newUsage);
    try {
      localStorage.setItem(DAILY_LIMIT_KEY, JSON.stringify(newUsage));
    } catch (e) {
      console.error('Failed to save daily usage:', e);
    }
  }, []);

  // Check if a tool is unlocked (user has provided email)
  const isUnlocked = useCallback(
    (toolId: string) => {
      if (!user) return false;
      return !!user.tools[toolId]?.unlockedAt;
    },
    [user]
  );

  // Unlock a tool with email
  const unlock = useCallback(
    async (toolId: string, email: string): Promise<boolean> => {
      if (!email || !email.includes('@')) return false;

      try {
        // Send email via EmailJS
        await emailjs.send(
          'service_larviog',
          'template_7iyu04b',
          {
            from_name: 'Tool Unlock',
            from_email: email,
            subject: `New ${toolId} Premium Unlock`,
            message: `User unlocked premium features for ${toolId}.\n\nEmail: ${email}`,
          },
          'v57Ta98pwBDWpoe8o'
        );

        // Update user state
        const newUser: FreemiumUser = user
          ? {
              ...user,
              email,
              tools: {
                ...user.tools,
                [toolId]: {
                  unlockedAt: Date.now(),
                  totalUsage: user.tools[toolId]?.totalUsage || 0,
                },
              },
            }
          : {
              email,
              createdAt: Date.now(),
              tools: {
                [toolId]: {
                  unlockedAt: Date.now(),
                  totalUsage: 0,
                },
              },
            };

        saveUser(newUser);
        return true;
      } catch (e) {
        console.error('Failed to unlock:', e);
        return false;
      }
    },
    [user, saveUser]
  );

  // Get today's usage count for a tool
  const getDailyUsage = useCallback(
    (toolId: string) => {
      if (dailyUsage.date !== getTodayKey()) {
        return 0;
      }
      return dailyUsage.counts[toolId] || 0;
    },
    [dailyUsage]
  );

  // Increment usage for a tool
  const incrementUsage = useCallback(
    (toolId: string) => {
      const today = getTodayKey();
      const newUsage: DailyUsage =
        dailyUsage.date === today
          ? {
              date: today,
              counts: {
                ...dailyUsage.counts,
                [toolId]: (dailyUsage.counts[toolId] || 0) + 1,
              },
            }
          : {
              date: today,
              counts: { [toolId]: 1 },
            };

      saveDailyUsage(newUsage);

      // Also update total usage in user if exists
      if (user) {
        const newUser: FreemiumUser = {
          ...user,
          tools: {
            ...user.tools,
            [toolId]: {
              ...user.tools[toolId],
              totalUsage: (user.tools[toolId]?.totalUsage || 0) + 1,
            },
          },
        };
        saveUser(newUser);
      }
    },
    [dailyUsage, user, saveDailyUsage, saveUser]
  );

  // Check if user can use a feature (under daily limit or unlocked)
  const canUse = useCallback(
    (toolId: string, dailyLimit?: number) => {
      // If unlocked, always can use
      if (isUnlocked(toolId)) return true;
      // If no daily limit specified, always can use
      if (!dailyLimit) return true;
      // Check daily usage
      return getDailyUsage(toolId) < dailyLimit;
    },
    [isUnlocked, getDailyUsage]
  );

  if (!loaded) {
    return null; // Or a loading spinner
  }

  return (
    <FreemiumContext.Provider
      value={{
        user,
        isUnlocked,
        unlock,
        getDailyUsage,
        incrementUsage,
        canUse,
        email: user?.email || null,
      }}
    >
      {children}
    </FreemiumContext.Provider>
  );
}

export function useFreemiumContext() {
  const context = useContext(FreemiumContext);
  if (!context) {
    throw new Error('useFreemiumContext must be used within a FreemiumProvider');
  }
  return context;
}
