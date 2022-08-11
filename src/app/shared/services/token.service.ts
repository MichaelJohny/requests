import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppTokenService {
    private storage = localStorage;
    private token = 'token';

    constructor() {
    }

    clear(): void {
        this.storage.removeItem(this.token);
    }

    any(): boolean {
        return this.get() !== null;
    }

    get(): string | null {
        return this.storage.getItem(this.token)
    }

    getToken(): string | null {
        const storageToken = this.storage.getItem(this.token);
        return storageToken;
    }

    set(token: string): void {

        this.storage.setItem(this.token, token);
    }

}
