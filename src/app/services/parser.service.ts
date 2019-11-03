import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParserService {
  element: any;
  originalElement = [];
  constructor() { }
}
