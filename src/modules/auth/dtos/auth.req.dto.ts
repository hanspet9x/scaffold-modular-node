import {ILoginRequest} from '../interfaces/auth.req.types';

export default class LoginRequestDTO {
  user: string;
  password: string;
  constructor(data: ILoginRequest) {
    this.user = data.username;
    this.password = data.password;
  }
}
