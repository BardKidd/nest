import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Alice',
      age: 16,
    },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 19 },
  ];

  getAllUsers() {
    return this.users;
  }

  addUser(user: CreateUserDto) {
    this.users.push(user);
    return { message: 'User added successfully', users: this.users };
  }

  getUserById(id: number) {
    const user = this.users[id]; // 假設 id 是陣列索引
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  updateUser(id: number, updateData: UpdateUserDto) {
    const user = this.users[id];
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // 更新資料
    if (updateData.name) {
      user.name = updateData.name;
    }
    if (updateData.age) {
      user.age = updateData.age;
    }

    return { message: 'User updated successfully', users: this.users };
  }

  deleteUser(id: number) {
    const user = this.users[id];
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.users.splice(id, 1);
    return { message: 'User deleted successfully', users: this.users };
  }
}
