import {UserEntity} from '../../../mongo/entities/user.entities';
import {ILoginResponse} from './../interfaces/auth.res.types';
export default class LoginResponseDTO implements ILoginResponse {
  fullname: string;
  photoUrl: string;
  username: string;

  constructor(data: UserEntity) {
    this.fullname = data.lastName +' '+ data.firstName;
    this.username = data.user;
    this.photoUrl = '';
  }
}
