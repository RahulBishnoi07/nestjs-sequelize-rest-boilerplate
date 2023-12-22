import { Module } from '@nestjs/common';
import { Dialect } from 'sequelize/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { applicationConfig } from 'config';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: applicationConfig.db.db_dialect as Dialect,
      host: applicationConfig.db.host,
      username: applicationConfig.db.user,
      password: applicationConfig.db.password,
      port: parseInt(applicationConfig.db.port, 10),
      database: applicationConfig.db.name,
      models: [User],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
