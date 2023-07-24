import {
  Inject,
  Injectable,
  Scope,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "~features/user/dto/create-user.dto";
import { UserService } from "~features/user/user.service";
import { CredentialsDto } from "./dto/credentials.dto";
import * as bcrypt from "bcrypt";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @Inject(CACHE_MANAGER) cacheManager: Cache
  ) {}

  createUser(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  async verify(credentials: CredentialsDto) {
    const { password, email } = credentials;

    const user = await this.userService.findOne({ where: { email } });

    if (!user ?? !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException("Please check your credentials");
    }
    return user;
  }

  // async cacheSession() {}
}
