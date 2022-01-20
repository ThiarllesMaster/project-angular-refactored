//In this class we will need to define the interaction view between the user and the backend
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { CategoryBook } from '../model/category_book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  category: string = ""

  //Here we define the object to receive the info from view
  book: Book = {
    title: "", 
    category: "", 
    quantity: 0
  }
  
  categories: CategoryBook[] = [
    { value: "Informatics", viewValue: "Informatics" }, 
    { value: "Science", viewValue: "Science"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addBook() {
    this.book.category = this.category
    console.log(`The book saved ${this.book.title}`)
  }

  cancel() {
    this.router.navigate(['/books'])
  }
}
