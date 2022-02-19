import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent implements OnInit {

  @Input() link :string = "" 
  @Input() title: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
