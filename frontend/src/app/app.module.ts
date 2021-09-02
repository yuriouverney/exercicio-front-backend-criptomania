import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogUsuarioComponent } from './blog/blog-usuario/blog-usuario.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BlogComponent,
    BlogUsuarioComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      "closeButton": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": 'toast-center-center',
            "preventDuplicates": false,
            iconClasses: {
                error: 'fas fa-trash',
                info: 'fa fa-info',
                success: 'fas fa-check',
                warning: 'something',
            },
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
