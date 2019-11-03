/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {ParserService} from '../../services/parser.service';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

declare let $: any;

@Component({
  selector: 'app-edit-code',
  templateUrl: './edit-code.component.html',
  styleUrls: ['./edit-code.component.css']
})
export class EditCodeComponent implements OnInit {

  modalOptions:NgbModalOptions;
  closeResult: any;
  selectValue = 'None';
  newElement = {
    tag: '',
    text: '',
    classList: '',
    styles: [],
    src: ''
  };

  color: any;

  constructor(private parserService: ParserService,
              private modalService: NgbModal) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

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

  addNewStyleNewElement() {
    this.newElement.styles.push({
      property: '',
      value: ''
    });
  }

  removeStyle(index: number) {
    this.parserService.element.styles.splice(index, 1);
  }

  removeStyleNewElement(index: number) {
    this.newElement.styles.splice(index, 1);
  }

  open(content) {
    this.newElement = {
      tag: '',
      text: '',
      classList: '',
      styles: [],
      src: ''
    };
    this.selectValue = 'None';
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  setSelectedValue(value: any) {
    this.selectValue = value;
    console.log(this.selectValue);
  }

  addNewElement() {
    // add element code  this.newElement
    this.newElement.tag = this.selectValue.toLowerCase();
    console.log(this.newElement);
    const myIframe = document.getElementsByTagName("iframe")[0];
    this.parserService.element.newElement = this.newElement;
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
  }

  colorChanged() {
    if (!this.arrayHasProperty(this.parserService.element.styles, 'background-color')) {
      this.parserService.element.styles.push({
        property: 'background-color',
        value: this.color
      });
    } else {
      this.parserService.element.styles[this.arrayHasProperty(this.parserService.element.styles, 'background-color')].value = this.color;
    }
  }

  colorChangedNewElement() {
    if (!this.arrayHasProperty(this.newElement.styles, 'background-color')) {
      this.newElement.styles.push({
        property: 'background-color',
        value: this.color
      });
    } else {
      this.newElement.styles[this.arrayHasProperty(this.newElement.styles, 'background-color')].value = this.color;
    }
  }

  arrayHasProperty(array: any[], property: string): any {
    let i = -1;
    array.forEach((item, index) => {
      if (item.property === property) {
        i = index;
      }
    });
    if (i === -1) {
      return false;
    }
    return i;
  }

  reorderElement() {
    // the code for reorder
    this.parserService.element.changeOrder = true;
    const myIframe = document.getElementsByTagName("iframe")[0];
    myIframe.contentWindow.postMessage(JSON.stringify(this.parserService.element), 'http://localhost:3000');
  }
}
