/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {ParserService} from '../../services/parser.service';

declare let $: any;

@Component({
  selector: 'app-edit-code',
  templateUrl: './edit-code.component.html',
  styleUrls: ['./edit-code.component.css']
})
export class EditCodeComponent implements OnInit {

  constructor(private parserService: ParserService) { }

  ngOnInit() {}

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    setTimeout(() => {
      document.getElementById('iframe').style.width = '100vw';
    }, 500);
  }

  deleteElement() {
    // delete code
    const myIframe = document.getElementsByTagName("iframe")[0];
    this.parserService.element.delete = true;
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
    this.parserService.element.delete = false;
  }

  addNewStyle() {
    this.parserService.element.styles.push({
      property: '',
      value: ''
    });
  }

  removeStyle(index: number) {
    this.parserService.element.styles.splice(index, 1);
  }

}
