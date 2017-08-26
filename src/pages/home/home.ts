import { Component } from '@angular/core';
import { GithubProvider } from '../../providers/github/github';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  informacionUsuario: any=[];
  valid=false;
  constructor(private _github: GithubProvider) {


  }

  testDojo(nickname: any){
    this._github.buscarUsuario(nickname).then((data)=>{
      this.informacionUsuario=data;
      this.valid=true;
    });


    console.log("hola sergio");
  }

}
