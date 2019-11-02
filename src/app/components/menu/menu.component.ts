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
    this.parserService.element.text = "alalala";
    this.parserService.element.styles.push({
      property: "color",
      value: "red"
    })
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById('iframe').style.width = '80vw';
  }

}
