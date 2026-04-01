// Simple utility to join class names conditionally.
// Usage: cn('base', condition && 'extra', anotherCondition ? 'a' : 'b')
export function cn(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === 'string') return [arg];
      if (Array.isArray(arg)) return arg.filter(Boolean);
      if (typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}



