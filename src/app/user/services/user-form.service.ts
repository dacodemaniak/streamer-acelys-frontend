import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StudentService } from "src/app/student/services/student.service";
import { IUserService } from "../interfaces/i-user-service";
import { UserModel } from "../models/user-model";
import { map } from "rxjs";

export abstract class UserFormService {
  protected _service!: IUserService
  protected _formBuilder: FormBuilder
  protected _form: FormGroup = new FormGroup({})
  protected _user: UserModel = new UserModel()

  constructor(
    _service: IUserService,
    _formBuilder: FormBuilder
  ) {
    this._service = _service
    this._formBuilder = _formBuilder
  }

    /**
   * public façade to build a FormGroup with existent datas
   * @param student StudentModel model with hydrated datas
   */
  public buildForm(user: UserModel): void {
    this._user = user
    this._buildForm()
  }

  /**
   * studentFormService.form <- this._form
   */
  get form(): FormGroup {
    return this._form
  }

  public get c(): {[key: string]: AbstractControl} {
    return this._form.controls
  }

  public onSubmit() {
    this._user.lastName = this.c['lastName'].value
    this._user.firstName = this.c['firstName'].value
    this._user.email = this.c['email'].value
    this._user.phoneNumber = this.c['phoneNumber'].value
    this._user.login = this.c['login'].value
    this._user.password = this.c['password'].value

    if (this._user.id) {

      return this._service.update(this._user)
        .pipe(
          map(_ => this._user)
        )
    }

    return this._service.add(this._user)
  }

  protected _buildForm(): void {
    this._form = this._formBuilder.group({
      lastName: [
        this._user.lastName,
        [
          Validators.required
        ]
      ],
      firstName: [
        this._user.firstName,
      ],
      email: [
        this._user.email,
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      phoneNumber: [
        this._user.phoneNumber
      ],
      login: [
        this._user.login,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      password: [
        this._user.password,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        ]
      ]
    })
  }
}
