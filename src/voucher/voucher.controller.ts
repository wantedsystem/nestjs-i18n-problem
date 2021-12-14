import { Controller, HttpException, ConsoleLogger, Post } from '@nestjs/common';
import { VoucherService } from './voucher.service';


@Controller('api/v1/voucher')
export class VouchersController {
  constructor(
    private voucherService: VoucherService,
    private readonly logger: ConsoleLogger
  ) {
    logger.setContext(VouchersController.name);
  }

  @Post('send-voucher')
  async sendVoucher(
  ): Promise<void> {
    try {
      this.logger.log('sendVoucher');
      this.voucherService.createVoucher();
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
