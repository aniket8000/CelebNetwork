import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller()
export class FollowController {
  constructor(private readonly service: FollowService) {}

  @Post('follow')
  async follow(@Body() dto: CreateFollowDto) {
    return this.service.follow(dto);
  }

  @Get('fan-dashboard/:fanId')
  async fanDashboard(@Param('fanId') fanId: string) {
    return this.service.fanDashboard(fanId);
  }

  @Get('celebrity-dashboard/:celebrityId')
  async celebrityDashboard(@Param('celebrityId') id: string) {
    return this.service.celebrityDashboard(id);
  }
}
