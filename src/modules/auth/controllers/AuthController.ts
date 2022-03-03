import express, {Request, Response} from 'express';
import {schemaValidationMDW} from '../../../middlewares/schemaValidation';
import {getResponseError, ResponseService}
  from '../../../services/response/ResponseService';
import {ILoginRequest} from '../interfaces/auth.req.types';
import {AuthRoutes} from '../routes/routes';
import {AuthSchema} from '../schema/auth.schema';
import AuthService from '../services/AuthService';

const AuthController = express.Router();

AuthController.post(AuthRoutes.LOGIN,
    schemaValidationMDW(AuthSchema.login, 'body'),
    async (req:Request, res:Response) => {
      const nBody = req.body;
      const nRes = await AuthService.login(nBody as ILoginRequest);
      if (nRes.error) {
        ResponseService.sendError(res,
            getResponseError('', nRes.data as number));
        return;
      }
      ResponseService.json(res, nRes.data, 200);
    });

AuthController.post(AuthRoutes.REGISTER, (req:Request, res:Response) => {
  ResponseService.send(res, req.body, 201);
});
AuthController.post(AuthRoutes.FORGOT_PASSWORD, (req:Request, res:Response) => {
  ResponseService.send(res, req.body, 201);
});

export default AuthController;
