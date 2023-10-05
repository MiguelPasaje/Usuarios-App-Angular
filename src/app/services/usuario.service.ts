import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url:string = 'https://gorest.co.in/public-api/users'
  token:string = '20f727f121e166df0be469c8dd697e11428e05f4e01adade99118304b0ceb7fc'
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any>{
    return this.http.get<any>(`${this.url}?access-token=${this.token}`)
  }
  getUsuario(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/${id}?access-token=${this.token}`)
  }

}
