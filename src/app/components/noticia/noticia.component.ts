import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/noticia-interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;
  constructor( private urlnoticia: InAppBrowser) { }

  ngOnInit() {}
  AbrirNoticia(){

    //console.log('noticia-->', this.noticia.url);
    const browser = this.urlnoticia.create(this.noticia.url, '_system');

  }

}
