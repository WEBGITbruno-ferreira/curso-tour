import { MessageService } from './../services/message.service';
import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private activeRequests = 0

  constructor(private loadingService: LoadingService,
              private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.activeRequests === 0) {
     // this.messageService.add("ABRIUUU")
      this.loadingService.show();

    }

    this.activeRequests++;

    return next.handle(request)
    .pipe(finalize(()=> {
        this.activeRequests--;

        if (this.activeRequests ===0){
       //   this.messageService.add("FECHOUUU")
          this.loadingService.hide()
        }
    }));
  }
}
