export class GitParams {
  id: string;
  login: string;

  constructor(params) {
    Object.assign(this, params);
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
