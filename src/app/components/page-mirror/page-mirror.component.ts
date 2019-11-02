/* tslint:disable */
import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-page-mirror',
  templateUrl: './page-mirror.component.html',
  styleUrls: ['./page-mirror.component.css']
})
export class PageMirrorComponent implements OnInit {

  @Input() iframeUrl;

  constructor(public domSanitizationService: DomSanitizer) {}

  ngOnInit() {}

}
