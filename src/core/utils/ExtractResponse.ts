// Import the Either type from the fp-ts library
import { Either} from 'fp-ts/Either';
import Failure from '../errors/Failure';
// Define the FunctionalResponse class
export class FunctionalResponse {
  // Static method to handle failure responses
  static failure<X>(either: Either<Failure, X>): string | null {
    return either._tag === 'Left' ? either.left.message : null;
  }

  // Static method to handle success responses
  static success<X>(either: Either<Failure, X>): X | null {
    return either._tag === 'Right' ? either.right : null;
  }
}
