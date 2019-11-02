/* tslint:disable */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() iframe: EventEmitter<any> = new EventEmitter<any>();
  iframeLink: string;

  constructor() { }

  ngOnInit() {}

  uploadLink() {
    this.iframeLink = $('#link').val();
    this.iframe.emit(this.iframeLink);
  }

  getIframeDOM() {
    const myIframe = document.getElementsByTagName("iframe")[0];
    myIframe.contentWindow.postMessage('hello', 'http://localhost:3000');
  }

}
