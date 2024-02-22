export const capitalize = (item: string | null): string | null => item !== null ? item.charAt(0).toUpperCase() + item.substring(1) : null;

export function getRandomArrayItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}
