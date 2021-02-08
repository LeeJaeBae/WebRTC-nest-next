import { Logger } from "@nestjs/common";
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: Server;

  private logger: Logger = new Logger("AppGateway");

  @SubscribeMessage("msg")
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): string {
    this.logger.log(`${client.id}: ${data}`);
    return data;
  }

  afterInit(server: Server) {
    this.logger.log(server);
    server.emit("msg", "test");
  }

  handleConnection(client: Socket, ...args: any[]): WsResponse<string> {
    this.logger.log(`Client connected: ${client.id}`);
    this.logger.log(this.server);
    return { event: "", data: "connect" };
  }

  handleDisconnect(client: Socket): any {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
