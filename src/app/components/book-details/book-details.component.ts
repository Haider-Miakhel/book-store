import { BookServiceService } from './../../services/book-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetails: any[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookService.bookDetails(this.route.snapshot.params.id).subscribe(
      data => {
        this.bookDetails = data;
        console.log(this.bookDetails);
      },
      error => {
        console.log(error);
      }
    );
  }

  //Goto Back
  goBack() {
    this.router.navigate(['']);
  }

}
