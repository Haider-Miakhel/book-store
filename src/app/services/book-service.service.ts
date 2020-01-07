import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url = "http://localhost:3000/Books/";
  currentBook = {
    id: null,
    book_name: '',
    author: '',
    edition: '',
    price: null,
  }
  constructor(private http: HttpClient) { }

  //fetch books
  dispaly(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  storeBook(frmData: any) {
    return this.http.post(this.url, frmData);
  }

  bookUpdate(frmData: any) {
    return this.http.put(this.url + frmData.id, frmData);
  }

  destroyBook(id) {
    return this.http.delete(this.url + id);
  }

  bookDetails(id): Observable<any[]> {
    return this.http.get<any[]>(this.url + id);
  }

}
