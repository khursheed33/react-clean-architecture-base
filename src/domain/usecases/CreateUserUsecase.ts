import UserEntity from '../entities/UserEntity';
import AuthenticationRepository from '../repositories/AuthenticationRepository';
import BaseUsecase from '../../core/usecases/BaseUsecase';
import Failure from '../../core/errors/Failure';
import { Either } from 'fp-ts/Either';

class CreateUserUsecase extends BaseUsecase<void, UserEntity> {
  repository: AuthenticationRepository;

  constructor(repository: AuthenticationRepository) {
    super();
    this.repository = repository;
  }

  async call(params: UserEntity): Promise<Either<Failure, void>> {
    return await this.repository.createUser(params);
  }
}

export default CreateUserUsecase;
