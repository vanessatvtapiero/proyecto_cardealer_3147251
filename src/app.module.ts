import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usuarioModule } from './usuario/usuario.module';

@Module({
  imports: [usuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
