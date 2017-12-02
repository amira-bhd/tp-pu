import { Component } from '@angular/core';
import { BookService } from './about/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookService]
})
export class AppComponent {
  title = 'hello world project';

 
}
