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
  @ViewChild('segmento') segmento: IonSegment;
  Noticias: Article[] =  [];


   constructor(private ApiServiceNoticiacategoria: ApiNewServiceService){
  }

  ngOnInit(){

   // console.log('este valor-->', this.Categoria[0]);
   this.cargarnoticia(this.Categoria[0]);
  }


  valordesegmento(event){
    this.Noticias = [];
    this.cargarnoticia(event.detail.value);


 }
 cargarnoticia(categoria: string){
  this.ApiServiceNoticiacategoria.ObtenerNoticiasCategoria(categoria).subscribe(respuesta => {
    // console.log('respuesta',this.Valor);
    this.Noticias.push(...respuesta.articles);
   });


 }

}
