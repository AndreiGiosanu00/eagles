import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-mirror',
  templateUrl: './page-mirror.component.html',
  styleUrls: ['./page-mirror.component.css']
})
export class PageMirrorComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe', {static: true}) iframe: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  getIframeDOM(){
    if(this.iframe.nativeElement){
     var wn = this.iframe.nativeElement.contentWindow;
     wn.postMessage('Hello to iframe from parent!', 'http://localhost:3000');
  }

}

}
