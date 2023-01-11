import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  myFunction(){
    window.open("mailto:juliano_soder@hotmail.com?subject=contato&amp;body=Hi friend")
  }
}
