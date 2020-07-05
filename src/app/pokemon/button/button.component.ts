import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input()
  name: string;
  isCathed = false;
  value = 'Catch!';
  ngOnInit(): void {}
  clcikHandler(): void {
    if (this.isCathed) {
      this.value = 'Catch!';
      this.isCathed = !this.isCathed;
      console.log(`${this.name} was released`);
    } else {
      this.value = 'Release!';
      this.isCathed = !this.isCathed;
      console.log(`${this.name} was cathced`);
    }
  }
}
