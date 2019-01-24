import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {DemoMaterialModule} from '../material_module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    DemoMaterialModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class LoginModule {
}
