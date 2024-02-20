export const capitalize = (item: string): string => item.charAt(0).toUpperCase() + item.substring(1);

export function getRandomArrayItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}
