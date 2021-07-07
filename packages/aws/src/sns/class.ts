import * as AWS from 'aws-sdk';
import { IAWSServiceConstructor } from '../type';

export class SNS {
  service: any;

  constructor({ region }: IAWSServiceConstructor) {
    this.service = new AWS.SNS({ region });
  }
}
