import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  verificaValidTouched(campo: any) {
    return !this.loginForm.get(campo).valid && this.loginForm.get(campo).touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  onSubmit() {

    this.userService.login(this.loginForm.value)
      .subscribe((response) => {
        
        if(response.ok === true) {
          this.router.navigate(['/contato'])
        } else {
          Swal.fire(
            'Acesso negado',
            'Verifique suas credenciais!',
            'error'
          )
        }
      },
      (error: any) => console.log('>>>', error));
  }

}
