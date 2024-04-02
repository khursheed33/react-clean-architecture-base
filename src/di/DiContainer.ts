// dependencies.ts

import { container } from "tsyringe";
import axios, { AxiosStatic } from "axios";
import { registerRepositories } from "./DiRepositories";
export const initializeDependencies = async () => {
  // Initialize external dependencies
  const Axios: AxiosStatic = axios;
  // Register dependencies with the container
  container.register<AxiosStatic>("AxiosInstance", { useValue: Axios });

  // diDatasources.ts
//   container.registerSingleton("AuthRemoteDatasource", AuthRemoteDatasourceImpl);

  // diRepositories.ts
  registerRepositories(container)

  // diUseCases.ts
//   container.registerSingleton("CreateUserUsecase", CreateUserUsecase);

  // diViewModels.ts
//   container.registerSingleton("AuthViewModel", AuthViewModel);
};

/* 
Initializations
// index.ts

import { initializeDependencies } from './dependencies';

(async () => {
  await initializeDependencies();

  // Now you can use your dependencies throughout your application
})();

*/
