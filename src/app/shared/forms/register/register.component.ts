import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService } from '../../../services/user.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength((9))]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  verificaValidTouched(campo: any) {
    return !this.registrationForm.get(campo).valid && this.registrationForm.get(campo).touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  onSubmit() {

    this.userService.add(this.registrationForm.value)
      .subscribe((response) => {
        this.registrationForm.reset();
        this.router.navigate(['/contato'])
      },
      (error: any) => alert('erro'));
      
  }
}
