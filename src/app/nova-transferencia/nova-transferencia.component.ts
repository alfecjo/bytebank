import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  //aqui, estamos lidando com um evento que pode ser emitido a a partir do componente filho,
  //para o componente pai.
  //aotransferir e' uma instancia de EventEmiter, a qual, permite que
  //um componente emita eventos personalizados.
  //esses eventos podem ser ouvidos e respondidos por outros componentes.
  //dessa forma, o filho agora pode emitir eventos, usando 'aotransferir.emit(valorEmitir)',valorEmitir
  // representa os dados que serao enviados
  //o componente pai, por sua vez, pode ouvir esse evento em app.component.html e executar uma acao.
  @Output() aotransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  transferir() {
    console.log('Solicitada transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aotransferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
