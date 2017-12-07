import { Injectable } from "@angular/core";
import { IBook } from "./book";
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class BookService{
    private _bookUrl='http://localhost:64369/api/book';
    constructor(private _http: Http){}


    getBooks(): Observable<IBook[]> {
        return this._http.get(this._bookUrl)
        .map((response: Response) => <IBook[]> response.json())
        .do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
