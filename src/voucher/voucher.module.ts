import { Logger, Module } from '@nestjs/common';
import { VouchersController } from './voucher.controller';
import { VoucherService } from './voucher.service';



@Module({
  controllers: [VouchersController],
  providers: [VoucherService, Logger],
  exports: [VoucherService],
})
export class VoucherModule { }
