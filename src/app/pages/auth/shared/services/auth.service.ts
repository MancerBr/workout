import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '@workout/constants';

import { pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
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
      email: email?.trim()?.toLocaleLowerCase(),
      password,
    }).pipe(
      pluck('token'),
      tap((token: string) => {
        Auth.setUserAuthorization(token);
      }),
    );
  }

  public logout(): void {
    Auth.deleteUserAuthorizationToken();
  }

  public register(email: string, password: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/${API.register}`, {
      email: email?.trim()?.toLocaleLowerCase(),
      password,
      deviceId: this.device.uuid || uuidv4(),
    });
  }
}
