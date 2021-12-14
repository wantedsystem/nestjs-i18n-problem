import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: ConsoleLogger) {
    logger.setContext(AppService.name);
  }
}
