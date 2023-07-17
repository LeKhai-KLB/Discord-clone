import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "~features/users/dto/create-user.dto";
import { UsersService } from "~features/users/users.service";
import { CredentialsDto } from "./dto/credentials.dto";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  register(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // async login(credentials: CredentialsDto) {
  //   const {password, email} = credentials

  //   const user = await this.userService.
  // }
}
