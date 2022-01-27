import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../components/book/model/book.model'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //define the Url
  baseUrl = environment.apiBaseUrl.concat('/book')

  constructor(private http: HttpClient) { }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl,book)
  } 

  listBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl)
  } 

  deleteBook(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url)
  }
}
