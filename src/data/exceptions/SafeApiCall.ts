import Failure from '../../core/errors/Failure';
import { left, right, Either } from 'fp-ts/Either';

// Define a higher-order function that handles API calls with error handling and checks for internet connectivity
export const safeApiCall = async <T>(handler: () => Promise<T>): Promise<Either<Failure, T>> => {
    try {
        // Execute the provided handler function to make the API call
        const response = await handler();
        // Return the API response as a success Either
        return right(response);
    } catch (error:any) {
        // Handle different types of errors and return a failure Either
        return left(new Failure(error.message));
    }
};
