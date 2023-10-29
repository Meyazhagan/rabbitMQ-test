import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { RabbitMQMessage } from "./RabbitMQMessage";
import { Controller } from "@nestjs/common";

@Controller("rabbitmq-controller")
export class RabbitMQController {
  @EventPattern("topic.sample.v1")
  async onTopicSampleV1(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    console.log("message", message)
  }

  @EventPattern("topic.test.v1")
  async onTopicTestV1(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {}
}
