import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './components/login.component'
import { SeleccionarEmpresaComponent } from './components/seleccionar-empresa.component'
import { SeleccionarModuloComponent } from './components/seleccionar-modulo.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    SeleccionarEmpresaComponent,
    SeleccionarModuloComponent
  ]
})
export class LoginModule {}
