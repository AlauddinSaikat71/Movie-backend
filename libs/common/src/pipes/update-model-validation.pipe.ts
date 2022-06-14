import {
  Injectable,
  Optional,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';

@Injectable()
export class UpdateModelValidationPipe extends ValidationPipe {
  constructor(@Optional() options?: ValidationPipeOptions) {
    options = options || {};
    super({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        exposeDefaultValues: true,
      },
      ...options,
    });
  }
}
