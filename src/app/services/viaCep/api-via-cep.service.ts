import { Injectable } from '@angular/core';
import { ViaCep } from '../../models/viaCep.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiViaCepService {

  apiUrl: string = "https://viacep.com.br/ws/";

  constructor(private httpClient: HttpClient) { }

  getEnderecoCep(cep: string){
    return this.httpClient.get<ViaCep>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response) =>{
        return response;
      })
    )
  }
}
