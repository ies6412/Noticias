import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/noticia-interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ThrowStmt } from '@angular/compiler';
import { DataLocalService } from '../../service/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;
  @Input() enfavorito;

  constructor( private urlnoticia: InAppBrowser,
               private  ActionController: ActionSheetController,
               private socialSharing: SocialSharing,
               private datanoticia: DataLocalService
               ) { }

  ngOnInit() {}
  AbrirNoticia(){

    // console.log('noticia-->', this.noticia.url);
    const browser = this.urlnoticia.create(this.noticia.url, '_system');

  }
  async lanzarmenu(){


    let guardarBorrarbtn;
    if ( this.enfavorito ){

      guardarBorrarbtn = {
        text: 'Borrar Favorito',
        // tslint:disable-next-line: align
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
         console.log('borrar');
         this.datanoticia.borrarnoticia(this.noticia);
        }
      };
   }
    else{
     guardarBorrarbtn = {
        text: 'Favorito',
        // tslint:disable-next-line: align
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.datanoticia.guardarNoticia(this.noticia);
        }
      };
    }

    const actionSheet = await this.ActionController.create({
            buttons: [{
          text: 'Compartir',
          icon: 'share-social',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url
            );
          }
        },
        guardarBorrarbtn,
        {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
    await actionSheet.present();
    }








}
