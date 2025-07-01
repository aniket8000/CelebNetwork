import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService {
  private openai: OpenAI;

  constructor(private config: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.config.get<string>('OPENAI_API_KEY'),
    });
  }

  async getCelebritySuggestions(description: string): Promise<any[]> {
    const prompt = `Based on this description: "${description}", suggest 3 real global celebrities (with name and profession only). Return as a JSON array like:
    [
      { "name": "Diljit Dosanjh", "profession": "Punjabi Singer" },
      { "name": "Coldplay", "profession": "International Band" },
      { "name": "Tony Robbins", "profession": "Motivational Speaker" }
    ]`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const reply = response.choices[0].message?.content;
    try {
      return JSON.parse(reply || '[]');
    } catch {
      return [];
    }
  }
}
