import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, Logger],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('App controller', () => {
    it('Test if AppController exist - should be defined', () => {
      expect(AppController).toBeDefined();
    });
  });
});
