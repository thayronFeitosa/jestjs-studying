import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class JogadoresValidacaoParametrosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(
        `The value to parameter ${metadata.data} not informed `,
      );
    }
    console.log(`value: ${value} metadata: ${metadata.data}`);
  }
}
