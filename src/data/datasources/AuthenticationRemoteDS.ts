import UserEntity from "../../domain/entities/UserEntity"; 
import { UserModel } from "../models/UserModel";

export interface AuthenticationRemoteDatasource {
  getToken(): Promise<string | null>;
  signOut(): Promise<void>;
  getUser(username: string): Promise<UserModel>;
  createUser(userEntity: UserEntity): Promise<void>;
}
