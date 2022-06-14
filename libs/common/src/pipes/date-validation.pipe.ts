import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class DateValidationPipe implements PipeTransform<string> {
  private readonly pattern =
    /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i;

  async transform(value, metadata: ArgumentMetadata): Promise<Date> {
    if (new Date(value).toString() === 'Invalid Date') {
      throw new BadRequestException(
        `Required property ${metadata.data} = ${value} is not date format`,
      );
    }
    if (value.match(this.pattern) === null) {
      throw new BadRequestException(
        `Required property ${metadata.data} = ${value} is not date format`,
      );
    }
    return new Date(value);
  }
}
