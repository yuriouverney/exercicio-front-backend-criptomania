import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUsuarioComponent } from './blog-usuario.component';

describe('BlogUsuarioComponent', () => {
  let component: BlogUsuarioComponent;
  let fixture: ComponentFixture<BlogUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
