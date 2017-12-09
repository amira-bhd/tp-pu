import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  listFilter: string;
  showImage: boolean=false;
  errorMessage: string;
  books: IBook[];

  listFilter1: string;

  constructor(private _bookService: BookService) {
     
  }
  
    ngOnInit(): void {
      
      this._bookService.getBooks()
      .subscribe(books => this.books=books,
      error => this.errorMessage= <any>error);  
    }

    search(event : HTMLInputElement){
      //this._bookService.filtre=this.listFilter1;
      console.log(event);
      let book :IBook[];
      this._bookService.searchBooks(event.value)
      .subscribe(books => this.books=books,
      error => this.errorMessage= <any>error); 

      
    }

toggleImage():void{
  this.showImage = !this.showImage;
}





}
