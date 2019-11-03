/* tslint:disable */
import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
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

  ngOnInit() {
    if(localStorage.getItem('elementJson')) {
      var aux = localStorage.getItem('elementJson');
      this.parserService.element = JSON.parse(aux);
      this.getIframeDOM();
    }
  }

  @HostListener('window:beforeunload') saveUser() {
    localStorage.setItem('elementJson', JSON.stringify(this.parserService.element));
  }

  uploadLink(e: any) {
    e.preventDefault();
    this.iframeLink = $('#link').val();
    this.iframe.emit(this.iframeLink);
  }

  getIframeDOM() {
    const myIframe = document.getElementsByTagName("iframe")[0];
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
  }
}
