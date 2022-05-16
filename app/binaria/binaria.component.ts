import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from './../validacao.service';

@Component({
  selector: 'app-binaria',
  templateUrl: './binaria.component.html',
  styleUrls: ['./binaria.component.css']
})
export class BinariaComponent implements OnInit {
  public resultado:string="";
  constructor(private validacao:ValidacaoService) { }

  ngOnInit(): void {
  }

  public enviarNumero(digito:string):void {
    if(this.validacao.ehValidaExpressaoBinario(digito, this.resultado)) {
      this.resultado+=digito;
    }
  }

  public limpar():void {
    this.resultado="";
  }

 public finalizar():void {

  let numero: string[];
  let x: number;
  let y: number;
  let soma: number;
  let resultado: string;

  if (this.resultado.indexOf("+") != -1) {
      numero = this.resultado.split("+");
      x = parseInt(numero[0], 2);
      y = parseInt(numero[1], 2);
      soma = x + y;
      resultado = soma.toString(2);
      this.resultado = resultado;
  }
  

}

}


