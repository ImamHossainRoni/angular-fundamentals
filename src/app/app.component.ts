import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fundamentals';

  blogs = [
    'Blog post - 1',
    'Blog post - 2',
    'Blog post - 3',
    'Blog post - 4',
    'Blog post - 5',
  ];
  number = 1;

  onClick(e: any) {
    e.stopPropagation() // To avoid event bubbling
    this.number += 1;
  }

  onClick1() {
    console.log('Div-1 clicked')
  }


  onClick2() {
    console.log('Div-2 clicked')
  }


}
