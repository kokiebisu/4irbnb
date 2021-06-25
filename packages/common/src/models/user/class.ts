import { IUser } from './interface';

export class User {
  id: string;
  username: string;
  name: string;
  iconUrl: string;

  constructor({ id, username, name, iconUrl }: IUser) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.iconUrl = iconUrl;
  }
}
