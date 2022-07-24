import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(
    private toastController: ToastController,
    private translateService: TranslateService,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showUserErrorMsg(request, error);
        return throwError(error);
      }),
    );
  }

  private showUserErrorMsg(request: HttpRequest<any>, error: HttpErrorResponse): void {
    if (error.status >= 500) {
      this.showError('HTTP_ERRORS.SOMETHING_WENT_WRONG');
      return;
    }

    switch (error.status) {
      case 401: this.showError('HTTP_ERRORS.INVALID_CREDENTIALS'); break;
      case 403: this.showError('HTTP_ERRORS.SESSION_EXPIRED'); break;
      case 409: this.showError('HTTP_ERRORS.USER_ALREADY_EXISTS', request?.body?.email); break;
    }
  }

  private async showError(message: string, value?: string): Promise<void> {
    const toast = await this.toastController.create({
      message: await this.translateService.get(message, {value}).toPromise(),
      duration: 5000,
      buttons: [
        {
          icon: 'close-outline',
        },
      ],
    });
    await toast.present();
  }
}
