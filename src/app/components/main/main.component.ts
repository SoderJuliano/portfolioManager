import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let intViewportWidth = window.innerWidth;
    intViewportWidth < 1600 && intViewportWidth > 1000 ?
    document.querySelectorAll<HTMLElement>('.hexagon-item')[5].style.left = "95px"
    : intViewportWidth < 1000  && intViewportWidth > 832 ? 
    (document.querySelectorAll<HTMLElement>('.hexagon-item')[5].style.left = "95px",
    document.querySelectorAll<HTMLElement>('.hexagon-item')[4].style.left = "95px")
    : intViewportWidth < 832 ? 
    (document.querySelectorAll<HTMLElement>('.hexagon-item')[5].style.left = "95px",
    document.querySelectorAll<HTMLElement>('.hexagon-item')[4].style.left = "95px",
    document.querySelectorAll<HTMLElement>('.hexagon-item')[3].style.left = "95px") : ""

  }
  myFunction(){
    window.open("mailto:juliano_soder@hotmail.com?subject=contato&amp;body=Hi friend")
  }
}
