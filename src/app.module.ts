import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MenuModule } from "./menu/menu.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesModule } from "./categories/categories.module";
import { Category } from "./categories/entities/category.entity";
import { MarcasModule } from "./marcas/marcas.module";
import { Marcas } from "./marcas/entitities/marcas.entity";
import { PaisesModule } from "./paises/paises.module";
import { Paises } from "./paises/entities/paises.entity";
import { GeneroModule } from "./genero/genero.module";
import { Genero } from "./genero/entities/gender.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "piarou",
      database: "ecommerce-ng",
      entities: [Category, Marcas, Paises, Genero],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MenuModule,
    CategoriesModule,
    MarcasModule,
    PaisesModule,
    GeneroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
