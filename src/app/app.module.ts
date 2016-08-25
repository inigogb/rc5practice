import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/components/login.component'
import { LoginService } from './login/services/login.service'
import { SeleccionarEmpresaComponent } from './login/components/seleccionar-empresa.component'
import { SeleccionarModuloComponent } from './login/components/seleccionar-modulo.component'
import { PageNotFoundComponent } from './page-not-found.component'
import { MenuComponent } from './menu/components/menu.component'
import { routing, appRoutingProviders } from './app.routing'
import { MdCardModule } from '@angular2-material/card'
import { MdButtonModule } from '@angular2-material/button'
import { MdButtonToggleModule } from '@angular2-material/button-toggle'
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdGridListModule } from '@angular2-material/grid-list'
import { MdIconModule } from '@angular2-material/icon'
import { MdListModule } from '@angular2-material/list'
import { MdMenuModule } from '@angular2-material/menu'
import { MdProgressBarModule } from '@angular2-material/progress-bar'
import { MdProgressCircleModule } from '@angular2-material/progress-circle'
import { MdRadioModule } from '@angular2-material/radio'
import { MdSidenavModule } from '@angular2-material/sidenav'
import { MdSliderModule } from '@angular2-material/slider'
import { MdSlideToggleModule } from '@angular2-material/slide-toggle'
import { MdTabsModule } from '@angular2-material/tabs'
import { MdToolbarModule } from '@angular2-material/toolbar'
import { MdTooltipModule } from '@angular2-material/tooltip'
import { MdInputModule } from '@angular2-material/input'
import { FormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core'
import { LoginModule } from './login/login.module'

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    //LoginModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdSliderModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdInputModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SeleccionarEmpresaComponent,
    SeleccionarModuloComponent,
    PageNotFoundComponent,
    MenuComponent
  ],
  providers: [
    appRoutingProviders,
    LoginService,
    CookieService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
