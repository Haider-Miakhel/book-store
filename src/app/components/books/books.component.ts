import { BookServiceService } from './../../services/book-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: any[];
  constructor(
    private bookService: BookServiceService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.displayBooks();
  }
  displayBooks() {
    this.bookService.dispaly().subscribe(
      data => {
        this.bookList = data;
        console.log(this.bookList);
      },
      error => {
        console.log(error);
      }
    );
  }

  createAndUpdate(bookData: any) {
    if (bookData.id != null) {
      this.updateBook(bookData);

    } else {
      this.insertBook(bookData);
    }
  }

  insertBook(data: any) {
    this.bookService.storeBook(data).subscribe(
      data => {
        this.displayBooks();
        $('#bookModal').modal('toggle');
        this.clear();
      },
      error => {
        console.log(error);
      }
    );
  }


  updateBook(data: any) {
    this.bookService.bookUpdate(data).subscribe(
      data => {
        this.displayBooks();
        $('#bookModal').modal('toggle');
        this.clear();
      },
      error => {
        console.log(error);
      }
    );
  }

  editBook(data: any) {
    this.bookService.currentBook = Object.assign({}, data);
    $('#bookModal').modal('toggle');
  }

  deleteBook(id) {
    this.bookService.destroyBook(id).subscribe(
      data => {
        this.displayBooks();
      },
      error => {
        console.log(error);
      }
    );
  }

  //book Details
  bookDetails(id) {
    this.router.navigate(['book-details', id]);
  }

  // clear currentBook Object
  clear() {
    this.bookService.currentBook = {
      id: null,
      book_name: '',
      author: '',
      edition: '',
      price: null,
    }
  }


}
