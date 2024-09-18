import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) { }

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('topic-name');
    await this.kafkaClient.connect();
  }

  sendMessage() {
    this.kafkaClient.emit('topic-name', {
      data: {
        key: 'message-key',
        value: 'Hello from Service One!',
      }
    });
  }
}
