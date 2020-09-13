import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/noticia-interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;
  constructor( private urlnoticia: InAppBrowser,
               private  ActionController: ActionSheetController
               ) { }

  ngOnInit() {}
  AbrirNoticia(){

    // console.log('noticia-->', this.noticia.url);
    const browser = this.urlnoticia.create(this.noticia.url, '_system');

  }
  async lanzarmenu(){

      const actionSheet = await this.ActionController.create({
            buttons: [{
          text: 'Compartir',
          icon: 'share-social',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Favorito',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('favorite');
          }
        }, {
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
