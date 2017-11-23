import { Component, OnInit } from '@angular/core';

import { IBook } from './book';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books: IBook[]= [
    {
      "bookId":1,
      "bookName":"Adultère",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":21.400,
      "starRating":3,
      "imageUrl":"assets/images/t1.jpg"
    },
    {
      "bookId":2,
      "bookName":"Apprendre a aimer",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":15.000,
      "starRating":5,
      "imageUrl":"assets/images/t2.jpg"
    },
    {
      "bookId":3,
      "bookName":"Perry Rohdan",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":28.600,
      "starRating":5,
      "imageUrl":"assets/images/t3.jpg"
    },
    {
      "bookId":4,
      "bookName":"Between",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":23.300,
      "starRating":1,
      "imageUrl":"assets/images/t4.jpg"
    },
    {
      "bookId":5,
      "bookName":"Spring Girls",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":54.400,
      "starRating":4,
      "imageUrl":"assets/images/t5.jpg"
    },
    {
      "bookId":6,
      "bookName":"Dieu n'habite pas La Havane",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":22.200,
      "starRating":1,
      "imageUrl":"assets/images/t6.jpg"
    },
    {
      "bookId":7,
      "bookName":"Harry Potter Tome 8",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":67.200,
      "starRating":2,
      "imageUrl":"assets/images/t7.jpg"
    },
    {
      "bookId":8,
      "bookName":"Imagines",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":27.500,
      "starRating":5,
      "imageUrl":"assets/images/t8.jpg"
    },
    {
      "bookId":9,
      "bookName":"La fille de Brooklyn",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":49.000,
      "starRating":4,
      "imageUrl":"assets/images/t9.jpg"
    },
    {
      "bookId":10,
      "bookName":"L'alchimiste",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":18.200,
      "starRating":2,
      "imageUrl":"assets/images/t10.jpg"
    },
    {
      "bookId":11,
      "bookName":"La méthode Running Lean",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":96.200,
      "starRating":4,
      "imageUrl":"assets/images/t11.jpg"
    },
    {
      "bookId":12,
      "bookName":"L'espionne",
      "author":"",
      "releaseDate":"",
      "description":"",
      "price":57.200,
      "starRating":2,
      "imageUrl":"assets/images/t12.jpg"
    }
    
  ]

}
