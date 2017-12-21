import { Component, OnInit } from '@angular/core';
import { livre } from '../about/livre';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
panier: livre[];
  constructor() { }

  ngOnInit() {
  }


  getStore(){
    var test= localStorage.getItem("user");
    console.log(test);
    this.panier = JSON.parse(test);
  
      }
   viderPanier():void
   {this.panier=[];
    localStorage.setItem("user",JSON.stringify(this.panier));
      }
}
