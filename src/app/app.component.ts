import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

// a propriedade 'transferencias' esta visivel ao componente filho 'app-extrato',
// atraves da declaracao em '<app-extrato [transferencias]="transferencias"></app-extrato>'.
  transferencias: any[] = [];

// aqui esta a chamada realizada em 'app.component.html'. Dessa forma, os valores sairam la de
// 'nova-transferencia.components.ts', foram escutados em 'app.component.html', o qual, chama o
// metodo 'transferir($event:any)', onde "$event", representam os valores.
  transferir($event: any) {
    console.log($event);
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }
}
