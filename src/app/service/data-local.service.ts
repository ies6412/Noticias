import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/noticia-interface';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {


  Noticias: Article[] = [];

  constructor(private storage: Storage,
              private toast: ToastController) {
    this.cargarNoticiasFavoritos();
   }

  guardarNoticia(noticia: Article){
    const existe = this.Noticias.find(noti => noti.title === noticia.title);
    if (!existe){
    console.log(noticia);
    this.Noticias.unshift(noticia);
    this.storage.set('favoritos', this.Noticias);
    this.mostrarinformacion('Se ha guardado en favoritos');

    }



  }
 async  cargarNoticiasFavoritos(){

   const favoritos = await this.storage.get('favoritos');
   if (favoritos){

      this.Noticias = favoritos;
    }



    }

    borrarnoticia(noticia: Article){
   this.Noticias = this.Noticias.filter(noti => noti.title !== noticia.title);
   this.storage.set('favoritos', this.Noticias);
   this.mostrarinformacion('Se ha borrado correctamnete');


    }
    
    async mostrarinformacion(message: string)
     {
      const toast = await this.toast.create({
        message,
        duration: 2000
      });
      toast.present();
    }

  }

