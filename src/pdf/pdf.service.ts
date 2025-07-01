import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
const PDFDocument = require('pdfkit');

@Injectable()
export class PdfService {
  constructor(private prisma: PrismaClient) {}

  async generateCelebrityPdf(id: string, res: Response) {
    const celeb = await this.prisma.celebrity.findUnique({
      where: { id },
    });

    if (!celeb) {
      res.status(404).send('Celebrity not found');
      return;
    }

    const doc = new PDFDocument();

    res.setHeader('Content-Disposition', `attachment; filename=${celeb.name}.pdf`);
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);

    doc.fontSize(20).text(`Celebrity Profile: ${celeb.name}`, { underline: true });
    doc.moveDown();
    doc.fontSize(14).text(`Genre: ${celeb.genre}`);
    doc.text(`Country: ${celeb.country}`);
    doc.text(`Instagram: ${celeb.instagramUrl}`);
    if (celeb.youtubeUrl) doc.text(`YouTube: ${celeb.youtubeUrl}`);
    if (celeb.spotifyUrl) doc.text(`Spotify: ${celeb.spotifyUrl}`);
    doc.text(`Fanbase: ${celeb.fanbase}`);
    if (celeb.setlist) doc.text(`Setlist: ${celeb.setlist}`);
    doc.text(`Profile Views: ${celeb.profileViews}`);

    doc.end();
  }
}
