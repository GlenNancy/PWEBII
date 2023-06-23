import { IComentario } from './../model/IComentario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private URL: string = 'http://localhost:3000/comentario';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<IComentario[]>{
    return this.http.get<IComentario[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  buscarPorId(id: number): Observable<IComentario>{
    return this.http.get<IComentario>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  cadastrar(produto: IComentario): Observable<IComentario>{
    return this.http.post<IComentario>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  atualizar(produto: IComentario): Observable<IComentario>{
    return this.http.put<IComentario>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  exibirErro(e: any):Observable<any> {
    this.exibirMensagem("Erro!!!", 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;

  }
  exibirMensagem(titulo:string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo,{closeButton:true, progressBar:true}, tipo);
  }
}
