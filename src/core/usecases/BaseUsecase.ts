import Failure from '../errors/Failure';
import { Either } from 'fp-ts/Either';

// The `BaseUsecase` class is an abstract class that represents a use case in TypeScript and defines a method
// for executing the use case.
abstract class BaseUsecase<Type, Params> {
  abstract call(params: Params): Promise<Either<Failure, Type>>;
}

export default BaseUsecase;
