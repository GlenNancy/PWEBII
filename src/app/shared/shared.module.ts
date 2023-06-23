import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';

@NgModule({
  declarations: [CardProdutoComponent],
  imports: [CommonModule],
  exports: [CardProdutoComponent],
})
export class SharedModule {}
