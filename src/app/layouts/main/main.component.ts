import { Component, OnInit } from '@angular/core';
import { UsuarioToken } from 'src/app/models/usuario/usuarioToken.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    let request = new UsuarioToken();
    request.userName = 'admin';
    request.password = '1234';
    debugger;
    this.usuarioService.TokenAsync(request).toPromise().then(
      res => {
        console.log(res.data);
        window.sessionStorage["passEr"] = res.data;
      }
    );
  }

}
