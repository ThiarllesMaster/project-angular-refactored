import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {title: "Title", category: "Category", quantity: 1}
  ]
  displayedColumns = ['Title', 'Category', 'Quantities', 'Action']

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createBook():void {
    this.router.navigate(['/create-book'])
  }

}
