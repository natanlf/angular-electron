import { Component } from '@angular/core';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron';

  constructor(){
    //localStorage.setItem("versao", "123");
    console.log(version);
  }
}
