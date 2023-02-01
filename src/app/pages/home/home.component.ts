import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario = "javier";
  contraseña= "isaac";
  log = "true";
  
  logeado!:boolean;
  nombre!:string;

  valorGlobal!:boolean;

  constructor(private globalDataService: LoginService) { }

  ngOnInit(){
   
  }

  guardarDatos(){
    localStorage.setItem('usuario',this.usuario)
    localStorage.setItem('contraseña',this.contraseña)
    localStorage.setItem('log',this.log)
  
    //muestro la data de la variable global
    // // this.valorGlobal = this.globalDataService.globalVariable;

    // cambiando dato de la variable global

    this.globalDataService.globalVariable = true;
  }

  consumirLocal(){
    this.valorGlobal = this.globalDataService.globalVariable;
    this.nombre=String(localStorage.getItem('usuario'));
    this.logeado = Boolean(localStorage.getItem('log'));
  }
}
