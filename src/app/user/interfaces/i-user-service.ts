import { Observable } from "rxjs";
import { UserModel } from "../models/user-model";
import { HttpResponse } from "@angular/common/http";

export interface IUserService {
  add(_user: UserModel): Observable<any>
  update(_user: UserModel): Observable<HttpResponse<any>>
}
