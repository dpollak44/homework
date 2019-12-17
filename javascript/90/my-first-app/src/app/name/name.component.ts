import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  @Input() name;
  @Input() address;
  address1 = { street: 'whitehouse lane' }
  constructor() { }

  ngOnInit() {
  }

}
