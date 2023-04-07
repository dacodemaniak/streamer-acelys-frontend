import { Component, Input, OnInit } from '@angular/core';
import { CreateModuleComponent } from '../../create-module/create-module.component'

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {


  constructor(private _createModule: CreateModuleComponent) { }

  ngOnInit(): void {

    console.log(this._createModule.medias)
  }

  public addMedia() {
    console.log("he")
  }

}
