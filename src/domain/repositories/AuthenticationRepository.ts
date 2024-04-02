// AuthenticationRepository.ts
import Failure from '../../core/errors/Failure';
import UserEntity from '../entities/UserEntity';
import { Either } from 'fp-ts/lib/Either';

interface AuthenticationRepository {
  // Get current user token from the local storage.
  getToken(): Promise<Either<Failure, string | null>>;

  // `Signout` - Removes Token from the local storage.
  signOut(): Promise<Either<Failure, void>>;

  // Gives user by username.
  // Takes `username` as an argument.
  getUser(username: string): Promise<Either<Failure, UserEntity>>;

  // Create User expects `UserEntity` as an argument, It creates a new user in the database.
  createUser(userEntity: UserEntity): Promise<Either<Failure, void>>;
}

export default AuthenticationRepository;
