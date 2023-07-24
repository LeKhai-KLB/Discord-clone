import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, email, username } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password.trim(), salt);
    const newUser = this.userRepository.create({
      email,
      username,
      password: hashedPassword,
    });
    await this.userRepository.save(createUserDto);
    return newUser;
  }

  find(options: FindManyOptions<User>) {
    return this.userRepository.find(options);
  }

  findOne(options: FindOneOptions<User>) {
    return this.userRepository.findOne(options);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
