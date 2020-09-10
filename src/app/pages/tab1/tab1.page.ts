import { Component, OnInit, EventEmitter } from '@angular/core';
import { ApiNewServiceService } from '../../service/api-new-service.service';
import { NoticiaInterface, Article } from '../../interfaces/noticia-interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  Noticias: Article[] = [];

  constructor(private apinoticia: ApiNewServiceService) {
  }
  ngOnInit(){

    this.CargarNoticias();


  }
  loadData(event){


      console.log(event);
    // tslint:disable-next-line: align
    this.CargarNoticias(event);

  }

  // creamos una funcion para cargar las noticias con el infiin scroll
  CargarNoticias( event?){

    this.apinoticia.ObtenerNoticias(). subscribe (resp => {
      console.log('noti', resp );
       // this.noticias=resp.articles; ->si pongo asi se sobreescriben los articulos...
       // lo que queremos es ponerlos en un arreglo
       // tslint:disable-next-line: align

      if (resp.articles.length === 0)
        {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

      this.Noticias.push(...resp.articles); // con esto inserto cada uno de los articulos...
      if (event)
       {
         event.target.complete();
       }

     });
  }

}
