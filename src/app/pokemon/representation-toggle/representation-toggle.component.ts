import { Component, OnInit } from '@angular/core';
import { IsListService } from '../is-list.service';

@Component({
  selector: 'app-representation-toggle',
  templateUrl: './representation-toggle.component.html',
  styleUrls: ['./representation-toggle.component.scss']
})
export class RepresentationToggleComponent implements OnInit {

  constructor(public isListService: IsListService) { }

  ngOnInit(): void {
  }

}
