import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';
//MODULE
@Module({
  imports: [],
  controllers: [usuarioController],
  providers: [],
})
export class usuarioModule { }
