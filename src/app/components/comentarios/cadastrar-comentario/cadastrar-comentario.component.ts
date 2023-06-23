import { IComentario } from './../../../model/IComentario.model';
import { ComentarioService } from './../../../services/comentario.Service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-comentario',
  templateUrl: './cadastrar-comentario.component.html',
  styleUrls: ['./cadastrar-comentario.component.css'],
})
export class CadastrarComentarioComponent implements OnInit {
  comentario: IComentario = {
    nome: '',
    descricao: '',
    data: new Date()
  };

  constructor(private comentarioService: ComentarioService, private router: Router) {}

  ngOnInit(): void {}

  salvarProduto(): void {
    this.comentarioService.cadastrar(this.comentario).subscribe(retorno => {
      this.comentario = retorno;
      this.comentarioService.exibirMensagem(
        'Sistema',
        `${this.comentario.nome} foi cadastrado com sucesso. ID ${this.comentario.id}`,
        'toast-success'
      );
      this.router.navigate(['/comentario']);
    });
  }
}
