// diRepositories.ts

import { DependencyContainer } from 'tsyringe';
import AuthenticationRepository from '../domain/repositories/AuthenticationRepository';
import {AuthenticationRepositoryImpl} from '../data/repositories/AuthenticationRepoImpl'

export const registerRepositories = (container: DependencyContainer) => {
  container.register<AuthenticationRepository>('AuthRepository', { useClass: AuthenticationRepositoryImpl });
};
