import {Component, OnInit} from '@angular/core';
import { IBook } from '../about/book';
import { ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-book',
    templateUrl: 'book-detail.component.html'

})
export class BookDetailComponent implements OnInit{
    pageTitle: string ='Book ID';
    name:string ='Book Name';
    auteur:string ='Author';
    releaseD:string ='Release Date';
    description:string ='Description';
    book: IBook;


    id:number;
    n:string;

    constructor(private _route: ActivatedRoute){

    }
   ngOnInit():void {
       //let id = +this._route.snapshot.params['id'];
      // this.pageTitle += `: ${id}`
       this._route.params.subscribe(params => {this.id = params['id']; this.n = params['n']});

       

       console.log(this.id+"/"+this.n);
     
       
   }
}
