import { Injectable } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlertaService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(Body:any) {
    return this.prisma.alertas.create({
      data: Body
    })
  }

  findAll() {
    return this.prisma.alertas.findMany({
     
    });
  }

  findOne(id: number) {
    return this.prisma.alertas.findFirst({
      where: { id_alerta : id }
    });
  }

  async update(id: number, Body : any) {
    return await this.prisma.alertas.update({
      where: { id_alerta : id },
      data: Body
    });
  }

  async remove(id: number) {
    await this.prisma.alertas.delete({
      where: { id_alerta : id }
    })
    return{
      "exito" : true,
      "mensaje" : "Eliminando correctamente",
      "id_alerta" : id
    }
  }
}
