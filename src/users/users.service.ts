import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async addUser({ name, age }: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create({ name, age });
    return this.usersRepository.save(user);
  }

  async getUserById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, updateData: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // 更新資料
    if (updateData.name) user.name = updateData.name;
    if (updateData.age) user.age = updateData.age;

    const updatedUser = await this.usersRepository.save(user);
    return { message: 'User updated', user: updatedUser };
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
