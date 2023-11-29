import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private static readonly TOKEN_KEY = 'token';

  constructor() { }

  // Store a JWT token in sessionStorage
  static storeToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  // Retrieve and decode the JWT token from sessionStorage
  static getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  static isTokenExpired(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken : any = jwt_decode.default(token);
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = new Date().getTime();
      return expirationTime < currentTime;
    }
    return true;
  }

  // Remove the JWT token from sessionStorage
  static removeToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  // Check if a JWT token is stored in sessionStorage
  static tokenExists(): boolean {
    return !!this.getToken();
  }

  // Decode the JWT token and return the payload as an object
  static decodeToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwt_decode.default((token));
      } catch (error) {
        console.error('Error decoding JWT token:', error);
      }
    }
    return null;
  }

  // Get a specific claim from the decoded JWT token
  static getClaim(claimName: string): any | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken[claimName] : null;
  }

  // Example usage: get the user's ID from the decoded token
  static getUserId(): string | null {
    return this.getClaim('sub');
  }
}
