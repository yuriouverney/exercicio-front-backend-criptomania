import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogUsuarioComponent } from './blog/blog-usuario/blog-usuario.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/user/:id', component: BlogUsuarioComponent },
  { path: 'blog/post/:id', component: BlogPostComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
