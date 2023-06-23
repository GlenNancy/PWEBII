import { Component, OnInit } from '@angular/core';
import { IComentario } from '../../../model/IComentario.model';
import { ComentarioService } from '../../../services/comentario.Service';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.css'],
})
export class ListarComentarioComponent implements OnInit {
  listaComentario: IComentario[] = [];

  constructor(private comentarioService: ComentarioService) {}

  ngOnInit(): void {
    this.carregarComentario();
  }

  carregarComentario(): void {
    this.comentarioService.buscarTodos().subscribe(retorno =>{
      this.listaComentario = retorno;
    })
  }

}
