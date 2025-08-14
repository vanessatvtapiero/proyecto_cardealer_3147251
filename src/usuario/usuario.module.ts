import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';

@Module({
  imports: [],
  controllers: [usuarioController],
  providers: [],
})
export class usuarioModule { }
