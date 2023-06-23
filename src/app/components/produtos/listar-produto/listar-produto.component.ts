import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  listaProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    })
  }

}
