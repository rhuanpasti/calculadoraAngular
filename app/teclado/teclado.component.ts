import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from './../validacao.service';


@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})

export class TecladoComponent implements OnInit {
  public resultado="";

  constructor(private validacao:ValidacaoService) { }

  montarResultado(digito:string):void{
    if(this.validacao.ehValidaExpressao(digito,this.resultado)){
      this.resultado+=digito;
    }
  }

  limpar(){
    this.resultado="";
  }

 

  ngOnInit(): void {}

  finalizar(){
    this.resultado=eval(this.resultado).toString();
  }


  clicar(valor:string){
    let digito:string=valor;
    this.montarResultado(digito);
  }

}
