import { HttpException, Injectable } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlertaService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(alertaDto:CreateAlertaDto) {
    let existe = await this.prisma.alertas.findFirst({
      where:{tipo_alerta: alertaDto.tipo_alerta}
    })
    if(existe){
      throw new HttpException({
        "exito": false,
        "mensaje":"la alerta ya existe"
      }, 404)
    }
    else{
        return await this.prisma.alertas.create({
      data: {
        tipo_alerta:alertaDto.tipo_alerta,
        plate:alertaDto.plate,
        fecha_alerta:new Date(alertaDto.fecha_alerta)
      
      }
    })
    }

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
