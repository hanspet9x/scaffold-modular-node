import {UserModel} from '../../../mongo/models/user.model';
import LoginRequestDTO from './../dtos/auth.req.dto';
export default class AuthRepository {
  static async login(data: LoginRequestDTO) {
    return await UserModel
        .findOne({user: data.user, password: data.password})
        .lean();
  }
}
