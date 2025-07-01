import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCelebrityDto } from './dto/create-celebrity.dto';

@Injectable()
export class CelebritiesService {
  constructor(private prisma: PrismaClient) {}

  async createCelebrity(dto: CreateCelebrityDto) {
    return this.prisma.celebrity.create({
      data: {
        name: dto.name,
        genre: dto.genre,
        country: dto.country,
        instagramUrl: dto.instagramUrl,
        youtubeUrl: dto.youtubeUrl,
        spotifyUrl: dto.spotifyUrl,
        fanbase: dto.fanbase,
        setlist: dto.setlist,
        user: { connect: { id: dto.userId } },
      },
    });
  }

  async getPublicProfile(id: string) {
    // 1. Increment profile views
    await this.prisma.celebrity.update({
      where: { id },
      data: {
        profileViews: {
          increment: 1,
        },
      },
    });

    // 2. Return selected profile data
    return this.prisma.celebrity.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        genre: true,
        country: true,
        instagramUrl: true,
        youtubeUrl: true,
        spotifyUrl: true,
        fanbase: true,
        profileViews: true,
      },
    });
  }
}
