import { IsNotEmpty, IsInt, IsAlpha, IsAlphanumeric, IsDateString, IsCurrency, IsNumber } from 'class-validator';

export class CreateLugareDto {

@IsNotEmpty({
  message:'Id de lugar es obligatorio'
})
@IsInt({
  message:'El id de lugar debe ser un numero entero'
})
  alerta_id: number;

  @IsNotEmpty({})

  Nombre_lugar: string;

  @IsNotEmpty({})

  Tipo_lugar: string;

  @IsNotEmpty({})

  direccion: string;

    @IsNotEmpty({})
  hora_apertura: string;

   @IsNotEmpty({})
  hora_cierre: string;

  @IsNotEmpty({})
  @IsNumber()
  precio: number;

} 

