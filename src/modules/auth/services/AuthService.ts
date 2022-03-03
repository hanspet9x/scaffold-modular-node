import {LogService} from '../../../services/log/LogService';
import ResponseError from '../../../services/response/ResponseError';
import LoginRequestDTO from '../dtos/auth.req.dto';
import LoginResponseDTO from '../dtos/auth.res.dto';
import {ILoginRequest} from '../interfaces/auth.req.types';
import AuthRepository from '../repo/AuthRepo';

export default class AuthService {
  static async login(data: ILoginRequest) {
    try {
      const res = await AuthRepository.login(new LoginRequestDTO(data));
      if (res) {
        return {error: false, data: new LoginResponseDTO(res)};
      } else {
        return {error: true, data: 404};
      }
    } catch (error: any) {
      LogService.error(error);
      throw new ResponseError(error.message, 500);
    }
  }
}
