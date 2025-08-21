import { Injectable } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlertaService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(createAlertaDto: CreateAlertaDto) {
    return 'This action adds a new alerta';
  }

  findAll() {
    return this.prisma.alertas.findMany();
  }

  findOne(id: number) {
    return this.prisma.alertas.findUnique({
      where: { id }
    });
  }

  update(id: number, updateAlertaDto: UpdateAlertaDto) {
    return `This action updates a #${id} alerta`;
  }

  remove(id: number) {
    return `This action removes a #${id} alerta`;
  }
}
