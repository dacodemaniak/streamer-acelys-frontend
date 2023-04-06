import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

  @Input() addMedia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
