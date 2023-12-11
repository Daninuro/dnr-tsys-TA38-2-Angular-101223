import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  clientes: Partial<{ nombre: string | null; mail: string | null; missage: string | null; result: string | null; }>[] = [];
  constructor(private clienteService: ClienteService) {
    this.clientes = clienteService.obtenerClientes();
  }

}
