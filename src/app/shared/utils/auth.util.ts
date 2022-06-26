export class Auth {
  private static readonly key = 'auth';

  public static setUserAuthorization(): void {
    localStorage.setItem(Auth.key, 'true');
  }

  public static deleteUserAuthorization(): void {
    localStorage.removeItem(Auth.key);
  }

  public static isAuth(): boolean {
    return localStorage.getItem(Auth.key) === 'true';
  }
}
