import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateFollowDto } from './dto/create-follow.dto';

@Injectable()
export class FollowService {
  constructor(private prisma: PrismaClient) {}

  async follow(dto: CreateFollowDto) {
    return this.prisma.follow.create({
      data: {
        fan: { connect: { id: dto.fanId } },
        celebrity: { connect: { id: dto.celebrityId } },
      },
    });
  }

  async fanDashboard(fanId: string) {
    return this.prisma.follow.findMany({
      where: { fanId },
      include: { celebrity: true },
    });
  }

  async celebrityDashboard(celebrityId: string) {
    const count = await this.prisma.follow.count({
      where: { celebrityId },
    });

    const fans = await this.prisma.follow.findMany({
      where: { celebrityId },
      include: { fan: true },
    });

    return { followerCount: count, fans };
  }
}
