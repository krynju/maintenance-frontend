import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {DemoMaterialModule} from '../material_module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    // MatInputModule,
    // MatCheckboxModule,
    // MatButtonModule,
    DemoMaterialModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class LoginModule {
}
