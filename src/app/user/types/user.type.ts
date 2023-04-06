import { UserRoleType } from "./user-role.type"

export type UserType = {
  id?: number
  login: string
  lastName: string
  firstName: string
  phoneNumber?: string
  email: string
  role: UserRoleType
  jwtToken: string
}
