import { error } from '@angular/compiler/src/util';
import { AfterViewInit, Component, VERSION } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  postArray = [
    { title: 'ducanh1', description: 'ducanh description 1' },
    { title: 'ducanh2', description: 'ducanh description 2' },
    { title: 'ducanh3', description: 'ducanh description 3' },
  ];

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('resolve the data.sending data')}, 2000);
  })

  postArrayObserverble$ = from(this.postArray);
  promiseObserverble$ = from(this.promise);

  constructor() {
    this.postArrayObserverble$.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('error');
      },
    });
    this.promiseObserverble$.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('complete promise');
      },
      error: (err) => {
        console.log('error');
      },
    });
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById('click-button'), 'click').subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('complete promise');
      },
      error: (err) => {
        console.log('error');
      },
    })
  }
}
