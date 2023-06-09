import { Component, Input, OnInit } from '@angular/core';
import { ModuleType } from '../../types/module-type';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  @Input() modules: ModuleType[] = []

  constructor() { }

  ngOnInit(): void {
  }

  revealOrHide(module: ModuleType): void {
    module.selected = !module.selected
    if (module.selected) {
      this.modules.filter((inModule: ModuleType) => inModule.selected).forEach((inModule: ModuleType) => {
        if (module.id !== inModule.id) {
          inModule.selected = false
        }
      })
    }
  }

}
