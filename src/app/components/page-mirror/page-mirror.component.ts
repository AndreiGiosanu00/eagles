import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-mirror',
  templateUrl: './page-mirror.component.html',
  styleUrls: ['./page-mirror.component.css']
})
export class PageMirrorComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe', {static: true}) iframe: ElementRef;

  @Input() iframeUrl;

  constructor(public domSanitizationService: DomSanitizer) {}

  ngOnInit() {}

  ngAfterViewInit() {
  }

  getIframeDOM(){
    var myIframe = document.getElementsByTagName("iframe")[0];
    myIframe.contentWindow.postMessage('hello', 'http://localhost:3000');
  }

}
