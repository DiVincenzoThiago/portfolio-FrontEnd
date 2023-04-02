import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {
  getsuma(x:number){
    x += 1;
    if (x>3) {
      x = 0;
    }
    console.log(x); 
  }
  getresta(x:number){
    x -= 1;
    if (x<1) {
      x = 3;
    }
    console.log(x);
}
}
