import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/book.model';
import {Subscription} from 'rxjs';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.booksSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.bookService.removeBook(book)
  }

  onViewBook(id: number) {
    this.router.navigate(['/books','view', id]);
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}
