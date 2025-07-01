import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { CelebritiesModule } from './celebrities/celebrities.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [UserModule, CelebritiesModule, PdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
