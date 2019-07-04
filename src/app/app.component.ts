import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bdp-select';
  list = [{
    name: 1,
    value: 1,
  },
    {
      name: 2,
      value: 2,
    },
    {
      name: 3,
      value: 4,
    },
    {
      name: 4,
      value: 4,
    }];
  show() {
    console.log(this.title);
  }
}
