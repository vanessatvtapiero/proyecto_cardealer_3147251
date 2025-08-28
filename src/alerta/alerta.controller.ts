import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';

@Controller('alerta')
export class AlertaController {
  constructor(private readonly alertaService: AlertaService) {}

  @Post()
  create(@Body() Body:any) {
    return this.alertaService.create(Body);
  }

  @Get()
  findAll() {
    return this.alertaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() Body:any) {
    return {
      "exito" : true,
      "mensaje" : "Actualizando correctamente",
      "id_alerta" : id,
      "data" : this.alertaService.update(+id, Body)
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertaService.remove(+id);
  }
}
