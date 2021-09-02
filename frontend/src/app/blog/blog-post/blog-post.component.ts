import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  postId;
  usuario;
  objetoPostComComentarios;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(tap(params =>  
      this.postId = Number(params.get('id')) || null)).toPromise();
      this.informacoesPost(this.postId)
  }

  public informacoesPost(id){
    this.blogService.getInformacoesPost(id).subscribe((item) => {
      this.objetoPostComComentarios = item;
      this.informacoesUsuario()
    })
  }

  public informacoesUsuario(){
    this.blogService.getInformacoesUsuario(this.objetoPostComComentarios.informacoesPost.userId).subscribe((item) => {
      this.usuario = item;
    })
  }

  public informacoesUsuarioPagina(){
    this.router.navigate(['/blog/user', this.objetoPostComComentarios.informacoesPost.userId])
  }
    

}
