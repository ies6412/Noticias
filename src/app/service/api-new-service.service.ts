import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoticiaInterface } from '../interfaces/noticia-interface';
import { environment } from '../../environments/environment';

const apiKey = environment.apikey;
const headers = new HttpHeaders({
   'X-Api-Key': apiKey
});
const URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class ApiNewServiceService {
PageHeadlines = 0;
PageHeadlineCategorias = 0;
categoria = '';
  constructor(private http: HttpClient) { }



    private Cargarservicionoticia<T>(query: string){
      query = URL + query;
      console.log('url->', query);
      return this.http.get<T>(query, { headers } );
    }


  ObtenerNoticias(){

    this.PageHeadlines++;

     // tslint:disable-next-line: align
     return this.Cargarservicionoticia<NoticiaInterface>(`top-headlines?country=us&category=business&page=${this.PageHeadlines}`);


    // return this.http.get<NoticiaInterface>(`${URL}top-headlines?country=us&category=business&apiKey=${apiKey}`);
  }
  ObtenerNoticiasCategoria(categoria: string){

    if (this.categoria === categoria){
   // this.PageHeadlineCategorias=pagina;
    this.PageHeadlineCategorias++;

  }
  else
  {
    this.PageHeadlineCategorias = 1;
    this.categoria = categoria;
  }
    console.log('esta pagina->', this.PageHeadlineCategorias);


    // podemos enviar con un signo + simpre y cuando se usen comillas simples como en este caso
     // return this.http.get<NoticiaInterface>('http://newsapi.org/v2/top-headlines?country=us&category='+categoria+'&apiKey='+apiKey);

     // o podemos enviar con las variables asi, utilizando apostrofes

     // return this.http.get<NoticiaInterface>(`${URL}/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`);

     // o utilizando la funcion... ten en cuenta que es este caso solo se envia hasta antes de &apiKey...

    return this.Cargarservicionoticia<NoticiaInterface>(`/top-headlines?country=us&category=${categoria}&page=${this.PageHeadlineCategorias}`);
  }
}
