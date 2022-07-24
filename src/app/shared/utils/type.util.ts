export class Type {
    public static as<T>(value: any): T {
      return value as any as T;
    }
}
