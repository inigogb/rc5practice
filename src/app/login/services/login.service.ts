import { Injectable } from '@angular/core'

@Injectable()
export class LoginService {

  isValidated: boolean = false
  isSelectedEmp: boolean = false
  hasFunctions: boolean = false
  isLoggedIn: boolean = false

  redirectUrl: string

  validate() {
    this.isValidated = true
  }

  selectEmpresa() {
    this.isSelectedEmp = true
  }

  getFunciones() {
    this.isLoggedIn = true
    this.isSelectedEmp = false
    this.isValidated = false
  }

  logout() {
    this.isLoggedIn = false
  }

}
