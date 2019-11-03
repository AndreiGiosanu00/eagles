/* tslint:disable */
import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eagles';
  iframeUrl = 'http://localhost:3000';

  getLink(link: any) {
    this.iframeUrl = link;
  }
}
