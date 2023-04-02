import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.css'],
})
export class PageAboutComponent implements OnInit {
  constructor() {}
 
  Form = new FormGroup({
   usuario: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
   email: new FormControl('',[Validators.required,Validators.email]),
   password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
 
  preview: string = '';

  get usuario(){
    return this.Form.get('usuario');
  }
  get UsuarioValid(){
    return false
  }

  onEnviar(event: Event){
    if (this.Form.valid) {
      this.preview = JSON.stringify(this.Form.value);
    } else {
      this.Form.markAllAsTouched
    }
  };
 
  ngOnInit(): void {}
 
}
