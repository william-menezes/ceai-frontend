import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of, tap } from 'rxjs';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly _baseUrl: string = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`${this._baseUrl}/${cep}/json`).pipe(
      first(),
      tap((address) => console.log(address))
    );
  }

  getByStreet(street: string): Observable<Address[]> {
    return this.http
      .get<Address[]>(`${this._baseUrl}/MG/Uberlandia/${street}/json`)
      .pipe(
        first(),
        tap((address) => console.log(address))
      );
  }
}
