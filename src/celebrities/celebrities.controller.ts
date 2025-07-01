import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CelebritiesService } from './celebrities.service';
import { CreateCelebrityDto } from './dto/create-celebrity.dto';

@Controller('celebrities')
export class CelebritiesController {
  constructor(private readonly celebService: CelebritiesService) {}

  @Post()
  create(@Body() dto: CreateCelebrityDto) {
    return this.celebService.createCelebrity(dto);
  }

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return this.celebService.getPublicProfile(id);
  }
}
