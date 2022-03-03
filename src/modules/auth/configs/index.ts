import {getEnv} from '../../../configs';

export const AuthConfigs = {
  token: getEnv('TOKEN_AUTH_USER'),
};
