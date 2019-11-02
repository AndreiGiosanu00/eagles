/* tslint:disable */
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ParserService} from '../../services/parser.service';


function _window() : any {
  return window;
}

@Component({
  selector: 'app-page-mirror',
  templateUrl: './page-mirror.component.html',
  styleUrls: ['./page-mirror.component.css']
})
export class PageMirrorComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe', {static: true}) iframe: ElementRef;
  @Input() iframeUrl;

  constructor(public domSanitizationService: DomSanitizer,
              public parserService: ParserService) {}

  ngOnInit() {
    _window().onmessage = (e: any) => {
      if(e.data.length === 0)
        return;
      this.parserService.element = JSON.parse(e.data);
    };
  }

  ngAfterViewInit() {}

  getIframeDOM(e:any) {
    const myIframe = document.getElementsByTagName("iframe")[0];
    this.parserService.element.text = "alalala";
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
    e.preventDefault()
    return false;
  }

}
