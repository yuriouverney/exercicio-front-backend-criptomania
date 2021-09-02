import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-usuario',
  templateUrl: './blog-usuario.component.html',
  styleUrls: ['./blog-usuario.component.css']
})
export class BlogUsuarioComponent implements OnInit {
  userId;
  userForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private blogService: BlogService,
    private fb: FormBuilder) { }

    public findOficio(idusuario) {
      return this.blogService.getInformacoesUsuario(idusuario).subscribe(usuarioInfo => {
        this.updateForm(usuarioInfo);
      });
    }

    private updateForm(usuarioInfo) {
      this.userForm.patchValue(usuarioInfo);
      this.userForm.patchValue(usuarioInfo.address)
      this.userForm.patchValue(usuarioInfo.address.geo)
      const empresa = {
        companyName: usuarioInfo.company.name,
        companyBs: usuarioInfo.company.bs,
        companycatchPhrase: usuarioInfo.company.catchPhrase
      }
      this.userForm.patchValue(empresa)
    }

  private createForm(): void {
    this.userForm = this.fb.group({
      name: [{ value: null, disabled: true }],
      username: [{ value: null, disabled: true }],
      email: [{ value: null, disabled: true }],
      website: [{ value: null, disabled: true }],
      address: [{ value: null, disabled: true }],
      street: [{ value: null, disabled: true }],
      suite: [{ value: null, disabled: true }],
      zipcode: [{ value: null, disabled: true }],
      city: [{ value: null, disabled: true }],
      lat: [{ value: null, disabled: true }],
      lng: [{ value: null, disabled: true }],
      companyName: [{ value: null, disabled: true }],
      companyBs: [{ value: null, disabled: true }],
      companycatchPhrase: [{ value: null, disabled: true }],
    },);
  }

  ngOnInit(): void {
    this.createForm();
    this.route.paramMap.pipe(tap(params =>  
      this.userId = Number(params.get('id')) || null)).toPromise();
      this.findOficio(this.userId)
  }

}
