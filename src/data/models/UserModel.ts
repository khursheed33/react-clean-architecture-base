// user.model.ts

import UserEntity from "../../domain/entities/UserEntity";


  export class UserModel implements UserEntity {
    constructor(
      public name: string,
      public surname: string,
      public username: string,
      public email: string
    ) {}
  
    static fromJson(json: any): UserModel {
      return new UserModel(
        json.name,
        json.surname,
        json.username,
        json.email
      );
    }
  
    toJson(): any {
      return {
        name: this.name,
        surname: this.surname,
        username: this.username,
        email: this.email
      };
    }
  }
  