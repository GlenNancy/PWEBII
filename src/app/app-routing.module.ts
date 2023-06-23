import { CadastrarComentarioComponent } from './components/comentarios/cadastrar-comentario/cadastrar-comentario.component';
import { ListarProdutosComponent } from './components/produtos/listar-produto/listar-produto.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';

import { HomeComponent } from './components/home/home.component';
import { ListarComentarioComponent } from './components/comentarios/listar-comentario/listar-comentario.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
  {path: 'comentario', component:ListarComentarioComponent},
  {path: 'comentario/cadastrar', component:CadastrarComentarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
