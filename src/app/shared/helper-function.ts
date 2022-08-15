import { HttpHeaders } from "@angular/common/http";

export class HelperFunction {
    token = "";   
   
    public GetOptions() {
        //this.token = localStorage.getItem('token');
     
        this.token = window.sessionStorage.getItem('passEr') || '';

        return { headers: new HttpHeaders({ 'Authorization': "Bearer "  + this.token }) };;
    }

}