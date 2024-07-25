import { resolve } from "path";
import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from "@nestjs/config";

dotenv.config({ path: resolve(__dirname, '.env') });

ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: resolve(__dirname, '.env'),
});

const configService = new ConfigService();

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get<number>('DATABASE_PORT'),
    database: configService.get<string>('DATABASE_NAME'),
    username: configService.get<string>('DATABASE_USER'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    define: {
        underscored: true
    }
});