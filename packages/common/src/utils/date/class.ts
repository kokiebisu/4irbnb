import { format, formatDistance, isValid } from "date-fns";

export class DateUtils {
  /**
   * Formats date
   * @param date
   * @example 2021-08-14
   * @returns string
   */
  static formatDate(date: Date): string {
    return format(date, "yyyy-MM-dd");
  }

  static formatDateByElapsedTime(date: Date): string {
    return formatDistance(date, new Date(), {
      addSuffix: true,
    });
  }

  /**
   * Checks whether if the given date is considered valid
   * @param date
   * @returns boolean
   */
  static checkIfValidDate(date: Date): boolean {
    return isValid(date);
  }
}
