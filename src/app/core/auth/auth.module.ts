import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../../primeng/primeng.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, PrimengModule],
})
export class AuthModule {}
