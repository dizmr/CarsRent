// src/lib/utils.ts

/**
 * Объединяет несколько классов в одну строку, пропуская falsy значения.
 * Пример: cn('btn', isActive && 'btn-active') -> 'btn btn-active'
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  
  /**
   * Проверяет, является ли значение пустой строкой или null/undefined
   */
  export function isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
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
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Клонирование объекта (глубокое)
   */
  export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
  