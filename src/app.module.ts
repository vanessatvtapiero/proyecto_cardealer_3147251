import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usuarioModule } from './usuario/usuario.module';
import { AlertaModule } from './alerta/alerta.module';
import { PrismaModule } from './prisma/prisma.module';
//APP MODULE//DOC
@Module({
  imports: [usuarioModule, AlertaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
