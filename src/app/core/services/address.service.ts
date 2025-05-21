import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of, tap } from 'rxjs';
import { Address } from '../interfaces/address';
import { District } from '../interfaces/district';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly _baseUrl: string = 'https://viacep.com.br/ws';
  private readonly _db: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`${this._baseUrl}/${cep}/json`).pipe(
      first(),
      //tap((address) => console.log(address))
    );
  }

  getByStreet(street: string): Observable<Address[]> {
    return this.http
      .get<Address[]>(`${this._baseUrl}/MG/Uberlandia/${street}/json`)
      .pipe(
        first(),
        //tap((address) => console.log(address))
      );
  }

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>(`${this._db}/districts`).pipe(
      first(),
      //tap((districts) => console.log(districts))
    );
  }
}
