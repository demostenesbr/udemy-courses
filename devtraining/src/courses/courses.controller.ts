import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses') // Endpoint para receber as requisições para a rotas alinhadas
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get() // 'list' Método HTTP (decorator)
  findAll() { // listar todos os cursos
    return this.coursesService.findAll();
  }

  @Get(':id') // Pegar o parâmetro dinâmico da rota
  findOne(@Param('id') id: string) { // decorator @Param com atributo ':id'
   return this.coursesService.findOne(id); // Retorno do parâmetro 'id'
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
