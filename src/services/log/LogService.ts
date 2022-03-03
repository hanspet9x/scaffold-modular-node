import {AppConfigs} from '../../configs/app';

export const LogService = {
  error(error: any) {
    console.error(error);
  },
  info(...info: any[]) {
    AppConfigs.IS_DEV && console.log(info);
  },
};
