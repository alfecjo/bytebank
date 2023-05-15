import { Component } from '@angular/core';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transferencia!: any;

  transferir($event: any) {
    console.log($event);
    this.transferencia = $event;
  }
}
