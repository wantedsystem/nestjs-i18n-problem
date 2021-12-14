import { Injectable, ConsoleLogger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class VoucherService {
  constructor(
    private i18n: I18nService,
    private readonly logger: ConsoleLogger
  ) {
    logger.setContext(VoucherService.name);
  }

  createVoucher(): string {
    this.i18n.translate(`paymentTypeAlert.unPaidPaimentTypeAlert`, {
      lang: 'fr-FR',
    });
    return 'OK'
  }

}
