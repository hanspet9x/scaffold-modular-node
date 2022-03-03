import http from 'http';
// import https from 'https';
// import fs from 'fs';
// import path from 'path';
import App from './app';
import {AppConfigs} from './configs/app';
import {connectDB} from './configs/db';
import {LogService} from './services/log/LogService';

http.createServer(App).listen(AppConfigs.SERVER_PORT, async () => {
  LogService.info('listening on port = ' + AppConfigs.SERVER_PORT);
  try {
    await connectDB();
  } catch (error) {
    LogService.log(error);
  }
});
// https.createServer(getSSLConfig(fs, path), App).listen(ConfigServer.portX);
