import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ModuleType } from 'src/app/course/types/module-type';
import { MediaService } from 'src/app/medias/services/media.service';
import { Member } from 'src/app/user/models/member';
import { ModuleService } from '../../services/module.service';
import { ToastService } from 'src/app/core/toast.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss']
})
export class ListModuleComponent implements OnInit {

  public modules: ModuleType[] = [];

  private _localStorageService: LocalStorageService = LocalStorageService.getInstance();
  private _currentUser: Member = this._localStorageService.getMemberFromStorage();


  constructor(
    private _moduleService: ModuleService,
    private _toastService: ToastService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._moduleService.findByCreator(this._currentUser.id!).pipe(take(1)).subscribe(
      (response: ModuleType[]) => {
        this.modules = response;
        console.log(this.modules)
      }
    )
  }

  handleModuleInfoChange(moduleDeleted: ModuleType) {
    this.modules = this.modules.filter(module => module.id !== moduleDeleted.id);
    this._snackBar.open(`"${moduleDeleted!.name}" was deleted.`, "Close");
  }


}