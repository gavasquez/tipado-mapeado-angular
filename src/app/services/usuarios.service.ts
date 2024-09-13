import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResResponse, Usuario } from '../models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  cargarUsuarios(){
    const url = 'https://reqres.in/api/users';
    return this.httpClient.get<ReqResResponse>(url).pipe(
      map(response => {
        return response.data.map(user => Usuario.usuarioDesdeJson(user));

      })
    );
  }
}
