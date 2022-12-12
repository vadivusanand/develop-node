import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class LoginExceptionFilter implements ExceptionFilter {
    constructor();
    catch(exception: HttpException, host: ArgumentsHost): void;
}
