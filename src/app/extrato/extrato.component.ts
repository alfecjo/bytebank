import { Component, Input } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';
import { Transferencia } from 'models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  //'@input()' indica que o componente pode receber dados do componente pai
  //'transferencias[]', e' um array, o qual, pode conter qualquer tipo de dado
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
