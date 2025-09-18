import { Injectable } from '@nestjs/common';
import { CreateLugareDto } from './dto/create-lugare.dto';
import { UpdateLugareDto } from './dto/update-lugare.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class LugaresService {
    constructor(private prisma: PrismaService){}
  async create(LugareDto: CreateLugareDto) {
   return await this.prisma.lugares.create({
    data:{
      alerta: { connect:{id_alerta: LugareDto.alerta_id}},
      Nombre_lugar:LugareDto.Nombre_lugar,
      Tipo_lugar:LugareDto.Tipo_lugar,
      direccion:LugareDto.direccion,
      hora_apertura:LugareDto.hora_apertura,
      hora_cierre:LugareDto.hora_cierre,
      precio:LugareDto.precio

    }
   })
  }

  findAll() {
    return `This action returns all lugares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lugare`;
  }

  update(id: number, updateLugareDto: UpdateLugareDto) {
    return `This action updates a #${id} lugare`;
  }

  remove(id: number) {
    return `This action removes a #${id} lugare`;
  }
}
