// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Объединяет несколько классов в одну строку, используя clsx и tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Проверяет, является ли значение пустой строкой или null/undefined
 */
export function isEmpty(value: any): boolean {
  return value === null || value === undefined || value === "";
}

/**
 * Функция для задержки выполнения (Promise sleep)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Преобразует первую букву строки в верхний регистр
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Клонирование объекта (глубокое)
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
