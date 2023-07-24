import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(20)
  password: string;
}
