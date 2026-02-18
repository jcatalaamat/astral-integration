import { useFreemiumContext } from '../context/FreemiumContext';

export function useFreemium(toolId: string, dailyLimit?: number) {
  const context = useFreemiumContext();

  return {
    isUnlocked: context.isUnlocked(toolId),
    canUse: context.canUse(toolId, dailyLimit),
    dailyUsage: context.getDailyUsage(toolId),
    dailyLimit,
    remainingUses: dailyLimit ? Math.max(0, dailyLimit - context.getDailyUsage(toolId)) : undefined,
    unlock: (email: string) => context.unlock(toolId, email),
    incrementUsage: () => context.incrementUsage(toolId),
    email: context.email,
  };
}
