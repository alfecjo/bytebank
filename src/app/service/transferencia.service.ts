import { Injectable } from '@angular/core';

// acrescentar o {providedIn: 'root'}, indica que a instancia vai
// estar ativa enquanto o App estiver funcionando (ativo.)
@Injectable({ providedIn: 'root' })
export class TransferenciaService {
  
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
