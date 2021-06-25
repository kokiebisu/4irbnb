import { IHost } from './interface';

export class Host {
  firstName: string;
  lastName: string;
  createdAt: Date;

  constructor({ firstName, lastName, createdAt }: IHost) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAt = createdAt;
  }
}
