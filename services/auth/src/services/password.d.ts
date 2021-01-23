export declare class Password {
    static toHash(password: string): Promise<string>;
    static compare(storedPassword: string, suppliedPassword: string): Promise<boolean>;
}
