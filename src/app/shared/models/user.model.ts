export class User {
  firstName?: string;
  lastName?: string;
  description?: string;
  dob?: number;
  id?: number;

  constructor(params: User) {
    Object.assign(this, params);
  }
}
