import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStrongPokemon]',
})
export class StrongPokemonDirective implements OnInit {
  @Input('appStrongPokemon') damage: number;
  color: string;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.color = this.damage >= 50 ? 'red' : 'black';
    this.el.nativeElement.style.borderColor = this.color;
  }
}
