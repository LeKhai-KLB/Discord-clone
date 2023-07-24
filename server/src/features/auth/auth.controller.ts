import { Controller, Post, Body, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "~features/user/dto/create-user.dto";
import { CredentialsDto } from "./dto/credentials.dto";
import { Request } from "express";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,

    @Req() request: Request,
    @Res() response: Response
  ) {}

  @Post()
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  // @Post()
  // async login(@Body() credentials: CredentialsDto) {
  //   const user = await this.authService.verify(credentials);
  // }
}
