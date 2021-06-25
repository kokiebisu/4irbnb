import { generateTimestamp } from '..';

export class DateUtil {
  static timestamp(datetime: Date) {
    return generateTimestamp(datetime);
  }
}
