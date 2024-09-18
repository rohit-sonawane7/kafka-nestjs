import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService
  ) { }
  // constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) { }

  // async onModuleInit() {
  //   this.kafkaClient.subscribeToResponseOf('topic-name');
  //   await this.kafkaClient.connect();
  // }

  @Get('send-message')
  sendMessage() {
    this.appService.sendMessage();
    // this.kafkaClient.emit('topic-name', {
    //   data: {
    //     key: 'message-key',
    //     value: 'Hello from Service One!',
    //   }
    // });

    return 'Message sent to Kafka topic!';
  }
}
