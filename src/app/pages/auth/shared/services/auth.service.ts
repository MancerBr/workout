import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '@workout/constants';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Device } from '@awesome-cordova-plugins/device/ngx';

import { environment } from '../../../../../environments/environment';
import { Auth } from '../../../../shared/utils/auth.util';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly device: Device,
    ) {}

  public login(email: string, password: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/${API.login}`, {
      email,
      password,
    }).pipe(
      tap(() => {
        Auth.setUserAuthorization();
      }),
    );
  }

  public logout(): void {
    Auth.deleteUserAuthorization();
  }

  public register(email: string, password: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/${API.register}`, {
      email,
      password,
      deviceId: this.device.uuid || '',
    });
  }
}
