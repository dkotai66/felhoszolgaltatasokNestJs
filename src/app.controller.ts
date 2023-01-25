import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Felhoszolgaltatasok } from './felhoszolgaltatasok.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get('/api/tarhely')
  adatok() {
    const tarhelyRepo = this.dataSource.getRepository(Felhoszolgaltatasok);
    return tarhelyRepo.find();
  }

  @Get('/api/tarhely/:id')
  adotttarhelyadat(@Param('id') id:number){
    const tarhelyRepo = this.dataSource.getRepository(Felhoszolgaltatasok);
    return tarhelyRepo.findBy({id});
  }

  @Put('/api/tarhely/:id')
  adatFrissites(@Body() tarhely:Felhoszolgaltatasok, @Param('id')id:number){
    const tarhelyRepo = this.dataSource.getRepository(Felhoszolgaltatasok);
    tarhelyRepo.update({id:id},{nev:tarhely.nev, meret:tarhely.meret, ar:tarhely.ar})
  }
  
  @Post('/api/tarhely')
  ujTarhely(@Body() tarhely:Felhoszolgaltatasok ) {
    tarhely.id = undefined;
    const tarhelyRepo = this.dataSource.getRepository(Felhoszolgaltatasok);
    tarhelyRepo.save(tarhely);
  }

  @Delete('/api/tarhely/:id')
  tarhelyTorles(@Param('id') id:number){
    const tarhelyRepo = this.dataSource.getRepository(Felhoszolgaltatasok);
    tarhelyRepo.delete(id);
  }


}
