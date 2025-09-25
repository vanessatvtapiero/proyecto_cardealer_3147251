import { HttpException, Injectable } from '@nestjs/common';
import { CreateLugareDto } from './dto/create-lugare.dto';
import { UpdateLugareDto } from './dto/update-lugare.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class LugaresService {
    constructor(private prisma: PrismaService){}
  async create(LugareDto: CreateLugareDto) {

    //validacion logica / negocio
    //aquella que se realiza con una o varios.
    //consulta a la base de datos
    //determinar la existencia de un registro


    //1. verificar que la alerta exista
    let existeLugar= await this.prisma.lugares.findFirst({
      where:{id_lugar : LugareDto.alerta_id}
    })
    if (!existeLugar){
      throw new HttpException({
        status : 404,
        error: 'La alerta no existe'
      },404);
    }

    //2. verificar que no exista un lugar con el mismo nombre en la misma alerta
    let existeNombreLugar= await this.prisma.lugares.findFirst({
      where:{
        Nombre_lugar : LugareDto.Nombre_lugar,
      }
    })
    if (existeNombreLugar){
      throw new HttpException({
        status : 400,
        error: 'El nombre del lugar ya existe'
      },400);
    }

    //3. verificar que la hora de apertura sea menor a la hora de cierre
    //4. verificar que el precio sea un numero positivo
    //se cumple, creqar el auto(insert)

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
