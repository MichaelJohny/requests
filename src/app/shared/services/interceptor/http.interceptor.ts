import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AppTokenService } from '../token.service';



@Injectable({ providedIn: 'root' })
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private appTokenService: AppTokenService) {
    }


    intercept(request: HttpRequest<any>, next: HttpHandler) {
        //console.log('request from interceptor', request);
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.appTokenService.getToken()}` }
        });

        return next.handle(request).pipe(
            map((resp) => {

                //console.log('response from interceptor ', resp);
                if (resp instanceof HttpResponse) {

                }

                return resp;
            }),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                if (error.status === 401 || error.status === 403) {

                    // this.authService.logout();
                }
                // 400 500 404
                switch (error.status) {
                    case 400: {

                        break;
                    }
                    case 404: {

                        break;
                    }
                    case 500: {

                        break;
                    }
                }
                // if () { }
                // else {
                // this.toaster.error(err.tostaerMessage.join('/n'));
                // }

                return throwError(error);
            })
        );
    }

}
