import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Curso Angular';
  //template string 👇 strings definidas com crase permitem a interpolação, permitindo colocar variáveis dentro da string
  //anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 1;
  precoProduto: number = 22.5;
  promocao: boolean = false;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31';

  listaProdutos: any[] = [
    {
      nome: 'Curso de Angular',
      precoProduto: 50.50,
      validade: '2022-12-31',
      id: 1,
    },
    {
      nome: 'Curso de React',
      precoProduto: 55.60,
      validade: '2022-12-31',
      id: 2,
      promocao: true,
    },
    {
      nome: 'Curso de Vue.js',
      precoProduto: 57.90,
      validade: '2022-12-31',
      id: 3,
    },
    {
      nome: 'Curso de .Net Core',
      precoProduto: 60.30,
      validade: '2022-12-31',
      id: 4,
    },
    {
      nome: 'Curso de ECMAScript',
      precoProduto: 70,
      validade: '2022-12-31',
      id: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
