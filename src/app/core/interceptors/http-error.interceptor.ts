import { MessageService } from './../services/message.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService
  ) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        let errorMsg = ''
        errorMsg = ''
        console.log(err.message)

        if (err.message) {
          errorMsg = ` Error : ${err.message}`
        } else {
          errorMsg = ` Error : ${err.status}`
        }

        //console.log(errorMsg)

        this.messageService.add(errorMsg)

        return  throwError(() => new Error(errorMsg))
      })
    );
  }
}
