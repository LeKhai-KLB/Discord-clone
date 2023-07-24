import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({
    length: 20,
  })
  username: string;

  @Column()
  password: string;
}
