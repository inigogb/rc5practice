import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MdCardModule } from '@angular2-material/card'
import { MdButtonModule } from '@angular2-material/button'
import { MdInputModule } from '@angular2-material/input'
import { LoginComponent } from './components/login.component'
import { LoginParentComponent } from './components/login-parent.component'
import { loginRouting, authProviders } from './login.routing'
import { SeleccionarEmpresaComponent } from './components/seleccionar-empresa.component'
import { SeleccionarModuloComponent } from './components/seleccionar-modulo.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    loginRouting
  ],
  declarations: [
    LoginComponent,
    LoginParentComponent,
    SeleccionarEmpresaComponent,
    SeleccionarModuloComponent
  ],
  providers: [
    authProviders
  ]
})
export class LoginModule {}
