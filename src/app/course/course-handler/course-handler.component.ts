import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ModuleAddComponent } from "../dialogs/module-add/module-add.component";
import { FormCourseBuilderService } from "../services/course-handler/form-course-builder.service";
import { CourseService } from "../services/course.service";
import { CourseType } from "../types/course-type";
import { ModuleType } from "../types/module-type";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { LocalStorageService } from "src/app/core/services/local-storage.service";

@Component({
  selector: "app-course-handler",
  templateUrl: "./course-handler.component.html",
  styleUrls: ["./course-handler.component.scss"],
})
export class CourseHandlerComponent implements OnInit {
  public form: FormGroup;
  public useModule: boolean = true;
  public modules: Array<ModuleType> = [];
  public course: CourseType;
  public updateCourse : boolean = false;

  constructor(
    private _formBuilder: FormCourseBuilderService,
    private _courseService: CourseService,
    private _router: Router,
    private _dialog: MatDialog,
    private _localStorageService : LocalStorageService
  ) {
    this.course = JSON.parse(sessionStorage.getItem("ModifiedCourse") + "");
    this._formBuilder.buildForm(this.course);
    if (this.course) {
      this.updateCourse=true;
      this.course.modules?.forEach((m) => {
        this.modules.push(m);
      });
      
    this.modules.sort((s1: ModuleType, s2: ModuleType) => (s1.id! - s2.id!) )
      //this.modules.sort((a,b)=>a.order > b.order)
    }
    this.form = this._formBuilder.form;
  }

  ngOnInit(): void {}

  get c(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  addModule(): void {
    this._dialog
      .open(ModuleAddComponent, {
        height: "flex",
        width: "flex",
      })
      .afterClosed()
      .subscribe((result: ModuleType | undefined) => {
        if (result !== undefined) {
          this.modules.push(result);
        }
      });
  }

  removeModule(module: ModuleType): void {
    this.modules.splice(this.modules.indexOf(module), 1);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.modules, event.previousIndex, event.currentIndex);
  }

  onSubmit(): void {
    let orderedModules : any[]=[];
    let i =0;
    this.modules.forEach(m=>{
      m.order = i;
      orderedModules.push(m);
      i++;
    })

    const course: CourseType = {
      title: this.c["title"].value,
      objective: this.c["objective"].value,
      modules: orderedModules,
      creator:{id:this._localStorageService.getMemberFromStorage().id}
    };
    console.log(course);

    if(this.updateCourse){

    }else{
      this._courseService.add(course).subscribe((courseType: CourseType) => {
        this._router.navigate(["/", "dashboard", "conceptor", "courses"]);
      });
    }
  }
}
