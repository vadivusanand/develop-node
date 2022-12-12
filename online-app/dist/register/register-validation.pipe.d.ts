import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class RegValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
