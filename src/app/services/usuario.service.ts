import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { UsuarioToken } from "../models/usuario/usuarioToken.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {}

    public TokenAsync(request: UsuarioToken): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body= request;
        return this.http.post<any>(this.config.webApiUrl + '/Usuario/TokenAsync',body, {'headers':headers});
    }
}