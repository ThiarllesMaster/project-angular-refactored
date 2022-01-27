import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../model/book.model';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = []
  showElement:boolean
  role: string
  displayedColumns = ['Title', 'Category', 'Quantities', 'Action']

  constructor(private router: Router, 
              private bookService: BookService, 
              private dialog: MatDialog, 
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.bookService.listBooks().subscribe(books => {
     this.books = books
    })

    if (! window.localStorage.getItem('Role')) {
      this.roleService.getRole().subscribe(role => {
        this.role = role.roleName.toString()
        window.localStorage.setItem('Role', this.role)
      })
    } else {
      this.role = window.localStorage.getItem('Role')
    }
   this.showElement = this.userHasPermission()
  }

  createBook():void {
    this.router.navigate(['/create-book'])
  }

  deleteBook(id: number) {
    const dialogRef = this.dialog.open(DialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.bookService.deleteBook(id).subscribe(() => {
          console.log('Deleted')
        })
        window.location.reload()
      }
    });
  }

  userHasPermission() {
    if (this.role === "admin") {
      return true
    } else {
      return false
    }
  }



}
