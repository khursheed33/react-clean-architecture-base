import { Either} from 'fp-ts/lib/Either';
import { UserModel } from '../models/UserModel';
import AuthenticationRepository  from '../../domain/repositories/AuthenticationRepository';
import {AuthenticationRemoteDatasource} from  '../datasources/AuthenticationRemoteDS';
import { safeApiCall } from '../exceptions/SafeApiCall';
import Failure  from '../../core/errors/Failure';
import UserEntity  from '../../domain/entities/UserEntity';

export class AuthenticationRepositoryImpl implements AuthenticationRepository {
  private readonly datasource: AuthenticationRemoteDatasource;
 

  constructor(datasource: AuthenticationRemoteDatasource) {
    this.datasource = datasource;
  }

  async getUser(username: string): Promise<Either<Failure, UserModel>> {
    return await safeApiCall<UserModel>(() => this.datasource.getUser(username));
  }

  async createUser(userEntity: UserEntity): Promise<Either<Failure, void>> {
    return await safeApiCall<void>(() => this.datasource.createUser(userEntity));
  }


  async signOut(): Promise<Either<Failure, void>> {
    return await safeApiCall<void>(() => this.datasource.signOut());
  }

  async getToken(): Promise<Either<Failure, string | null>> {
    return await safeApiCall<string | null>(() => this.datasource.getToken());
  }
}
