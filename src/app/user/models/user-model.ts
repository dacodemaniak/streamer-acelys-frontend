import { Expose } from "class-transformer"
import { UserRoleType } from "../types/user-role.type"

export class UserModel {
  @Expose({name: 'id'})
  private _id?: number
  @Expose({name: 'lastName'})
  private _lastName: string = ''
  @Expose({name: 'firstName'})
  private _firstName?: string = ''
  @Expose({name: 'email'})
  private _email: string = ''
  @Expose({name: 'phoneNumber'})
  private _phoneNumber?: string = ''
  @Expose({name: 'login'})
  private _login: string = ''
  @Expose({name: 'password'})
  private _password: string = ''
  @Expose({name: 'role'})
  private _role: UserRoleType = {
    id: 2,
    role: 'Student'
  }

  /**
   * @usage
   *  const student: StudentModel = new StudentModel()
   *  student.id = 10 // magic setter
   *  console.log(student.id) // magic getter
   */
  get id() {
    return this._id === undefined ? 0 : this._id
  }

  set id(val: number) {
    this._id = val
  }

  get lastName() {
    return this._lastName
  }

  set lastName(val: string) {
    this._lastName = val
  }

  get firstName() {
    return this._firstName === undefined ? '' : this._firstName
  }

  set firstName(val: string) {
    this._firstName = val
  }

  get email() {
    return this._email
  }

  set email(val: string) {
    this._email = val
  }

  get phoneNumber() {
    return this._phoneNumber === undefined ? '' : this._phoneNumber
  }

  set phoneNumber(val: string) {
    this._phoneNumber = val
  }

  get login() {
    return this._login
  }

  set login(val: string) {
    this._login = val
  }

  get password() {
    return this._password
  }

  set password(val: string) {
    this._password = val
  }

  get role(): UserRoleType {
    return this._role
  }

  set role(role: UserRoleType) {
    this._role = role
  }
}
