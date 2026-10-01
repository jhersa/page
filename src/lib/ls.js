export function formatLsDate(date = new Date()) {
  const datePart = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  const timePart = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return `${datePart} ${timePart}`;
}

export function formatLsSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  return `${(bytes / 1024).toFixed(1)}K`;
}
