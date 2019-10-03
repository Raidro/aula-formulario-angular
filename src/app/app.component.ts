import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente: new() => Cliente;

  profissoes = ['Engenheiro', 'Dentista', 'Professor']; // nome da propriedade


  salvar(form: NgForm) {

  this.cliente.nome = form.value.inputNome;
  this.cliente.email = form.value.inputNome;
  this.cliente.profissao = form.value.inputNome;

  }

}

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}
