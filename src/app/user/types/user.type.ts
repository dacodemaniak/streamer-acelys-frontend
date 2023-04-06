export type UserType = {
  id?: number
  lastName: string
  firstName: string
  phoneNumber?: string
  email: string
  roles: Array<string>
  jwtToken: string
}
