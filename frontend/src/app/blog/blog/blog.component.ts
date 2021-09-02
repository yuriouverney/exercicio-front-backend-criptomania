import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService,
    private toastr: ToastrService,
    private router: Router) { }

  objetoCompleto;

  ngOnInit(): void {
    this.getAllPosts()
  }

  public getAllPosts() {
    this.blogService.getPosts().subscribe((item) => {
      this.objetoCompleto = item
    })
  }
  
  public informacoesUsuario(id){
      this.router.navigate(['/blog/user', id])
  }

  public informacoesPost(id){
      this.router.navigate(['/blog/post', id])
  }

}
