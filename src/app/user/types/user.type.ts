import { UserRoleType } from "./user-role.type"

export type UserType = {
  id?: number
  lastName: string
  firstName: string
  phoneNumber?: string
  email: string
  roles: UserRoleType
  jwtToken: string
}
