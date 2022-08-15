import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { HelperFunction } from "../shared/helper-function";
import { CategoriaListView } from "../models/categoria/categoriaList-view.model";
import { Observable } from "rxjs";
import { CategoriaInsUpdRequest } from "../models/categoria/categoriaInsUpd.request.model";
@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    private httpOptions: any;
    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {}

    public obtnerPlanId(descripcion: string): Observable<any> {
        this.httpOptions = new HelperFunction().GetOptions();
        return this.http.get<CategoriaListView>(this.config.webApiUrl + '/Categoria/GetCategoriaAllFilterAsync?Descripcion=' + descripcion, this.httpOptions);
    }

    public InsertUpdateAsync(request: CategoriaInsUpdRequest): Observable<any> {
        this.httpOptions = new HelperFunction().GetOptions();
        return this.http.post<any>(this.config.webApiUrl + '/Categoria/InsertUpdateAsync', request, this.httpOptions);
    }
}