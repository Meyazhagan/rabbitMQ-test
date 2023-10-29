import { Controller } from "@nestjs/common";
import { HealthControllerBase } from "./base/health.controller.base";
import { HealthService } from "./health.service";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";

@Controller("_health")
export class HealthController extends HealthControllerBase {
  constructor(protected readonly healthService: HealthService,
    protected readonly rabbitMq: RabbitMQProducerService) {
    super(healthService, rabbitMq);
  }
}
