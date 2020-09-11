import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ApiNewServiceService } from 'src/app/service/api-new-service.service';
import { Article } from '../../interfaces/noticia-interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  Categoria = ['business', 'entertainment', 'general', 'health', 'science', 'sports' , 'technology'];
  @ViewChild('segmento', { static: true}) segmento: IonSegment;
  Noticias: Article[] =  [];
  Pagina = 0;
  Categoriaactual =  '';


   constructor(private ApiServiceNoticiacategoria: ApiNewServiceService){
  }

  ngOnInit(){


    this.segmento.value = this.Categoria[0];
   // console.log('este valor-->', this.Categoria[0]);
    this.cargarnoticia(this.Categoria[0], this.Pagina);
  }


  valordesegmento(event){

    this.Noticias = [];
    console.log('ionchange->', event.detail.value);
    this.Categoriaactual = event.detail.value;
    this.cargarnoticia(this.Categoriaactual);


 }
 cargarnoticia(categoria: string,  event?){


  this.ApiServiceNoticiacategoria.ObtenerNoticiasCategoria(categoria).subscribe(respuesta => {
    console.log('respuesta-->', respuesta.totalResults);

    if (respuesta.articles.length === 0)
        {
          event.target.disabled = true;
          event.target.complete();
          return;
        }
    this.Noticias.push(...respuesta.articles);
    if (event)
    {

      event.target.complete();
    }

   });


 }
 loadData(event: any){

 this.cargarnoticia(this.Categoriaactual , event );
 }

}
