import { Controller, Delete, Get, Patch, Post, Param} from '@nestjs/common';


@Controller('usuario')
export class usuarioController {
  
  //endpint:
  //destino de la request 
  //se escribe como una funcion 

  @Get()
  consultarUsuarios(): string {
    return "Aqui se podrán consultar los usuarios";
  }
  //Desde la request se va 
  //a capturar el parametro id 
  @Get(":id")
  consultarUsuarioId(@Param('id') id: string): string {
    return `Aqui se va a consultar el usuario con id: ${id}`;
  }
  @Post ()
  crearUsuario(): string {
    return  `Aqui se va a crear el usuario `;
  }
  @Patch(":id")
  actualizarUsuario(@Param('id') id: string): string {
    return `Aqui se va a actualizar el usuario con id: ${id}`;
    }
  @Delete(":id")
  eliminarUsuario(@Param('id') id: string): string {
    return `Aqui se va a eliminar el usuario con id: ${id}`;
    }
}
