//In this class we will need to define the interaction view between the user and the backend
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { CategoryBook } from '../model/category_book.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  myForm: FormGroup
  book:Book

  constructor(private router: Router, 
    private formBuilder: FormBuilder, 
    private bookService: BookService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: ['', [
        Validators.required
      ]], 
      copies: 0, 
      category: ''      
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
    
  categories: CategoryBook[] = [
    { value: "Informatics", viewValue: "Informatics" }, 
    { value: "Science", viewValue: "Science"}
  ]


  addBook() {
    console.log(`This is the title: ${this.myForm.value.title}`)
    this.book = {
      title: this.myForm.value.title, 
      category: this.myForm.value.category, 
      copies: this.myForm.value.copies
    }
    this.bookService.saveBook(this.book).subscribe(() => {
      complete: () => console.log('Book Saved')
      error: err => {
        console.log(err)
      }      
    })
    this.router.navigate(['/books'])
  }

  cancel() {
    this.router.navigate(['/books'])
  }
}
