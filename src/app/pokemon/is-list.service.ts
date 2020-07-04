import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsListService {
  constructor() {}
  isListed = false;
  toggle(): void {
    this.isListed = !this.isListed;
    console.log(`is Listed: ${this.isListed}`);
  }
}
