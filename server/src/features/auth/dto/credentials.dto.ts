import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CredentialsDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(20)
  password: string;
}
