import { Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { HealthService } from "../health.service";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";

export class HealthControllerBase {
  constructor(protected readonly healthService: HealthService, 
    protected readonly rabbitMq: RabbitMQProducerService) {}
  @Get("live")
  healthLive(@Res() response: Response): Response<void> {
    // testing rabbitMQ
    this.rabbitMq.emitMessage(MyMessageBrokerTopics.TopicSampleV1, {
      key: "Test",
      value: "RabbitMQ",
      headers: {}
    });

    return response.send({"test": "ok"});
  }
  @Get("ready")
  async healthReady(@Res() response: Response): Promise<Response<void>> {
    const dbConnection = await this.healthService.isDbReady();
    if (!dbConnection) {
      return response.status(HttpStatus.NOT_FOUND).send();
    }
    return response.status(HttpStatus.NO_CONTENT).send();
  }
}
