import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  // @Body() 說明傳入的資料是 JSON 格式
  // 後面的則是一個限定物件格式的內容
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }

  @Get(':id') // :id 是動態路由參數，表示 users/:id
  // @Param() 說明取得路由參數
  getUserById(@Param('id') id: number | string) {
    return this.userService.getUserById(Number(id));
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(Number(id), updateUserDto);
  }
}
