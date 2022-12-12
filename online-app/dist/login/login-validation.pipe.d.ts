import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class LoginValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
