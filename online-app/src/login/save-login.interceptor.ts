import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { tap } from 'rxjs/operators';


@Injectable()
export class SaveLoginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    let ctx = context.switchToHttp() 
    console.log(ctx);
    let req:Request = ctx.getRequest<Request>();
   // /^[A-Z]+$/i.test("vadivu")
   // if(req.body.username === '')
    console.log(req.body)
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}