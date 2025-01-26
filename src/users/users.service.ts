import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Alice',
      age: 16,
    },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 18 },
  ];

  getAllUsers() {
    return this.users;
  }

  addUser(user: CreateUserDto) {
    this.users.push(user);
    return { message: 'User added successfully', users: this.users };
  }
}
