import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [PdfController],
  providers: [PdfService, PrismaClient],
})
export class PdfModule {}
