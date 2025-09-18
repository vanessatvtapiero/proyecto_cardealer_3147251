import { Module } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [LugaresController],
  providers: [LugaresService],
})
export class LugaresModule {}
