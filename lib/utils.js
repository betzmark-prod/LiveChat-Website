// Utility functions for class name merging or other generic tasks
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
