import { error } from '@angular/compiler/src/util';
import { Component, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  postArray = [
    { title: 'ducanh1', description: 'ducanh description 1' },
    { title: 'ducanh2', description: 'ducanh description 2' },
    { title: 'ducanh3', description: 'ducanh description 3' },
  ];

  postArrayObserverble$ = of(this.postArray);

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
  }
}
