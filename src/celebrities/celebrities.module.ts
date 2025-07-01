import { Module } from '@nestjs/common';
import { CelebritiesController } from './celebrities.controller';
import { CelebritiesService } from './celebrities.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CelebritiesController],
  providers: [CelebritiesService, PrismaClient],
})
export class CelebritiesModule {}
