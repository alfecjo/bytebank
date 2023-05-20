import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {

  //'@input()' indica que o componente pode receber dados do componente pai
  //'transferencias[]', e' um array, o qual, pode conter qualquer tipo de dado
  @Input() transferencias: any[] = [];


}
