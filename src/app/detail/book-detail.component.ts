import {Component, OnInit} from '@angular/core';
import { IBook } from '../about/book';
import { ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-book',
    templateUrl: 'book-detail.component.html'

})
export class BookDetailComponent implements OnInit{
    pageTitle: string ='Book Detail';
    book: IBook;
    constructor(private _route: ActivatedRoute){

    }
   ngOnInit():void {
       let id = +this._route.snapshot.params['id'];
       this.pageTitle += `: ${id}`;
       
   }
}
