import { Controller, Get, Param, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { Response } from 'express';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get(':id')
  async downloadPdf(@Param('id') id: string, @Res() res: Response) {
    await this.pdfService.generateCelebrityPdf(id, res);
  }
}
