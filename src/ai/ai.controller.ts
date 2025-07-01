import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('search')
  async search(@Body('query') query: string) {
    const results = await this.aiService.getCelebritySuggestions(query);
    return { results };
  }
}
