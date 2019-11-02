import { Component, OnInit } from '@angular/core';
import {ParserService} from '../../services/parser.service';

@Component({
  selector: 'app-edit-code',
  templateUrl: './edit-code.component.html',
  styleUrls: ['./edit-code.component.css']
})
export class EditCodeComponent implements OnInit {

  styles: any;

  constructor(private parserService: ParserService) { }

  ngOnInit() {
    this.styles = this.parserService.element.target.style;
    console.log(this.styles);
  }

}
