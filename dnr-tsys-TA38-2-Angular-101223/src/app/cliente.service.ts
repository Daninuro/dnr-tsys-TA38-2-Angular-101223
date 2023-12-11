import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Partial<{ nombre: string | null; mail: string | null; missage: string | null; result: string | null; }>[] = [];

  agregarCliente(cliente: Partial<{ nombre: string | null; mail: string | null; missage: string | null; result: string | null; }>): void {
    this.clientes.push(cliente);
  }

  obtenerClientes(): Partial<{ nombre: string | null; mail: string | null; missage: string | null; result: string | null; }>[] {
    return this.clientes;
  }
  constructor() { }
}
