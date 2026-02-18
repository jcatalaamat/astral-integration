import { useState } from 'react';
import { useFreemium } from '../../hooks/useFreemium';
import { Tool } from '../../config/tools';

interface FreemiumGateProps {
  tool: Tool;
  dailyLimit?: number;
  children: React.ReactNode;
  onUnlock?: () => void;
}

export default function FreemiumGate({ tool, dailyLimit, children, onUnlock }: FreemiumGateProps) {
  const { canUse, unlock } = useFreemium(tool.id, dailyLimit);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleUnlock = async () => {
    if (!email || !email.includes('@')) return;
    setStatus('sending');

    const success = await unlock(email);
    if (success) {
      setStatus('success');
      setTimeout(() => {
        setShowModal(false);
        onUnlock?.();
      }, 1500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // If can use, just render children
  if (canUse) {
    return <>{children}</>;
  }

  // Show limit reached state
  return (
    <>
      <div className="relative">
        {/* Blurred/disabled children */}
        <div className="opacity-50 pointer-events-none blur-sm">
          {children}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-dark-bg/80 rounded-xl">
          <div className="text-center p-6">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4"
              style={{
                background: tool.theme.primaryGlow,
              }}
            >
              {tool.icon}
            </div>
            <h3 className="font-serif text-h4 text-content-primary mb-2">
              Daily limit reached
            </h3>
            <p className="text-body-sm text-content-secondary mb-4">
              You've used all {dailyLimit} free generations today.
              <br />
              Unlock unlimited access with your email.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 rounded-full text-white font-medium transition-all btn-tool-glow"
              style={{ background: tool.theme.primary }}
            >
              Unlock Unlimited
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-dark-bg/90 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal content */}
          <div className="relative bg-dark-card border border-border rounded-2xl p-8 max-w-md w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-content-muted hover:text-content-primary transition-colors"
            >
              ✕
            </button>

            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl mx-auto mb-6"
              style={{
                background: tool.theme.primaryGlow,
                boxShadow: `0 0 40px ${tool.theme.primaryGlow}`,
              }}
            >
              {tool.icon}
            </div>

            <h2 className="font-serif text-h2 text-content-primary text-center mb-2">
              Unlock {tool.name}
            </h2>
            <p className="text-body-sm text-content-secondary text-center mb-6">
              Get unlimited access to all features. Just enter your email.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-border focus:border-border-hover focus:outline-none text-content-primary placeholder:text-content-muted transition-colors"
              />

              <button
                onClick={handleUnlock}
                disabled={status === 'sending' || status === 'success'}
                className="w-full px-6 py-3 rounded-full text-white font-medium transition-all disabled:opacity-50"
                style={{
                  background:
                    status === 'success'
                      ? '#2A9D6A'
                      : status === 'error'
                      ? '#E53E3E'
                      : tool.theme.primary,
                }}
              >
                {status === 'success'
                  ? 'Unlocked! ✓'
                  : status === 'sending'
                  ? 'Unlocking...'
                  : status === 'error'
                  ? 'Try again'
                  : 'Unlock Free'}
              </button>
            </div>

            <p className="text-xs text-content-muted text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// Simpler version for buttons/actions
export function FreemiumButton({
  tool,
  dailyLimit,
  onClick,
  children,
  className,
  style,
}: {
  tool: Tool;
  dailyLimit?: number;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { canUse, remainingUses, isUnlocked } = useFreemium(tool.id, dailyLimit);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { unlock } = useFreemium(tool.id, dailyLimit);

  const handleClick = () => {
    if (canUse) {
      onClick();
    } else {
      setShowModal(true);
    }
  };

  const handleUnlock = async () => {
    if (!email || !email.includes('@')) return;
    setStatus('sending');

    const success = await unlock(email);
    if (success) {
      setStatus('success');
      setTimeout(() => {
        setShowModal(false);
        onClick();
      }, 1000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className} style={style}>
        {children}
        {dailyLimit && !isUnlocked && remainingUses !== undefined && (
          <span className="ml-2 text-xs opacity-70">({remainingUses} left)</span>
        )}
      </button>

      {/* Reuse same modal pattern */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-dark-bg/90 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          <div className="relative bg-dark-card border border-border rounded-2xl p-8 max-w-md w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-content-muted hover:text-content-primary transition-colors"
            >
              ✕
            </button>

            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl mx-auto mb-6"
              style={{
                background: tool.theme.primaryGlow,
                boxShadow: `0 0 40px ${tool.theme.primaryGlow}`,
              }}
            >
              {tool.icon}
            </div>

            <h2 className="font-serif text-h2 text-content-primary text-center mb-2">
              Unlock Unlimited
            </h2>
            <p className="text-body-sm text-content-secondary text-center mb-6">
              You've reached today's limit. Enter your email to unlock unlimited access.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-border focus:border-border-hover focus:outline-none text-content-primary placeholder:text-content-muted transition-colors"
              />

              <button
                onClick={handleUnlock}
                disabled={status === 'sending' || status === 'success'}
                className="w-full px-6 py-3 rounded-full text-white font-medium transition-all disabled:opacity-50"
                style={{
                  background:
                    status === 'success'
                      ? '#2A9D6A'
                      : status === 'error'
                      ? '#E53E3E'
                      : tool.theme.primary,
                }}
              >
                {status === 'success'
                  ? 'Unlocked! ✓'
                  : status === 'sending'
                  ? 'Unlocking...'
                  : status === 'error'
                  ? 'Try again'
                  : 'Unlock Free'}
              </button>
            </div>

            <p className="text-xs text-content-muted text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
