/* tslint:disable */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ParserService} from '../../services/parser.service';

declare let $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() iframe: EventEmitter<any> = new EventEmitter<any>();
  iframeLink: string;

  constructor(private parserService: ParserService) { }

  ngOnInit() {}

  uploadLink(e: any) {
    e.preventDefault();
    this.iframeLink = $('#link').val();
    this.iframe.emit(this.iframeLink);
  }

  getIframeDOM(e: any) {
    e.preventDefault();
    const myIframe = document.getElementsByTagName("iframe")[0];
    console.log(this.parserService.element)
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
  }

  revertModifications() {
    this.parserService.element = {};
    document.getElementById("mySidebar").style.width = "0";
    setTimeout(() => {
      document.getElementById('iframe').style.width = '100vw';
    }, 500);
  }
}
