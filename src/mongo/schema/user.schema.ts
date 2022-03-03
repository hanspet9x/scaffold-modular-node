import {Schema} from 'mongoose';
import {UserEntity} from '../entities/user.entities';

export const UserSchema = new Schema<UserEntity>({
  user: {required: true, type: String},
  email: {required: true, type: String},
  firstName: {required: true, type: String},
  password: {required: true, type: String},
  address: {required: true, type: String},
});
