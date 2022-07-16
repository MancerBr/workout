export class Auth {
  private static readonly key = 'token';

  public static setUserAuthorization(token: string): void {
    localStorage.setItem(Auth.key, token);
  }

  public static deleteUserAuthorizationToken(): void {
    localStorage.removeItem(Auth.key);
  }

  public static isAuth(): boolean {
    return !!localStorage.getItem(Auth.key);
  }
}
