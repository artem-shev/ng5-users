import { GitUser } from './git-responses.model';

export class GitParams {
  id: number;
  login: string;

  constructor({ id, login }: GitUser) {
    this.id = id;
    this.login = login;
  }
}

export class User {
  firstName?: string;
  lastName?: string;
  description?: string;
  dob?: number;
  id?: number;
  git?: GitParams;

  constructor(params: User) {
    Object.assign(this, params);
  }
}
