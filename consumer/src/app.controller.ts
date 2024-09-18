import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('topic-name')
  handleTopicMessage(@Payload() message: { data: any }) {
    console.log('Received message from Kafka:', JSON.stringify(message.data));
  }
}
