import { AuthenticationRemoteDatasource } from './AuthenticationRemoteDS';
import { UserModel } from '../models/UserModel';

export class AuthRemoteDatasourceImpl implements AuthenticationRemoteDatasource {
  private readonly hiveBox: any;
  private readonly sharedPreferences: any;

  constructor(hiveBox: any, sharedPreferences: any) {
    this.hiveBox = hiveBox;
    this.sharedPreferences = sharedPreferences;
  }

  async getUser(username: string): Promise<UserModel> {
    return new Promise<UserModel>((resolve) => {
      setTimeout(() => {
        const newUser = new UserModel(
          "name", // Provide name
          "surname", // Provide surname
          "username", // Provide username
          "email" // Provide email
        );
        resolve(newUser);
      }, 1000);
    });
  }
  

  async createUser(userModel: UserModel): Promise<void> {
    // Implementation for creating a new user
    return Promise.resolve();
  }


  async signOut(): Promise<void> {
    await this.sharedPreferences.removeItem("AppKeys.authToken");
  }

  async getToken(): Promise<string | null> {
    return this.sharedPreferences.getItem("AppKeys.authToken");
  }
}
