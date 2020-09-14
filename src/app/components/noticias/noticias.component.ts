import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/noticia-interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {


  @Input() Noticias: Article[] = [];
  @Input() enfavorito = false;
  constructor() { }

  ngOnInit() {}

}
