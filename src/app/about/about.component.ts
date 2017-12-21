import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';
import { livre} from './livre';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  l:livre;
  panier:livre[]=[];
  listFilter: string;
  showImage: boolean=false;
  errorMessage: string;
  books: IBook[];
  name:string;
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

Storage(BookID:number,BookName:string):void{
 this.l=new livre(BookID,BookName);
 this.panier.push(this.l);
 localStorage.setItem("user",JSON.stringify(this.panier));
 console.log("Livre ajouté au panier!!");
 
}





}
