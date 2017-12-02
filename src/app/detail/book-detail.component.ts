import {Component} from '@angular/core';
import { IBook } from '../about/book';


@Component({
    selector: 'app-book',
    templateUrl: 'book-detail.component.html'
    
})
export class BookDetailComponent {
    pageTitle: string ='Book Detail';
    book: IBook;
}