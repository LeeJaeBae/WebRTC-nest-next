import { Module } from "@nestjs/common";
import Next from "next";
import { RenderModule } from "nest-next";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppGateway } from "./app.gateway";

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== "production",
      }),
    ),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
