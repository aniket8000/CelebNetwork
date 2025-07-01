import { Injectable } from '@nestjs/common';
import { PrismaClient, Role } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
        role: dto.role as Role,
        name: dto.name,
        country: dto.country,
      },
    });
  }
}
