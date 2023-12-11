import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  sendItem: string = '';
  
  contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required,), 
    mail: new FormControl('', Validators.required,),
    missage: new FormControl('', Validators.required),
    result: new FormControl('', Validators.required),
  });

  sendForm(): void {
    console.log(this.sendItem);
  }
  constructor(private clienteService: ClienteService) {}

ContactFormSubmit(): void {
  const respuestaCorrecta = 2 + 3;
  const result = this.contactForm.value.result;

  if (result !== null && result !== undefined) {
    const respuestaUsuario = parseInt(result, 10);

    if (!isNaN(respuestaUsuario) && respuestaUsuario === respuestaCorrecta) {
      const nuevoCliente = this.contactForm.value;
      this.clienteService.agregarCliente(nuevoCliente);
      console.log(nuevoCliente);
    } else {
      alert('¡Fallaste!');
    }
  }
}

}
