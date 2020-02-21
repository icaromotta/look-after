import { UtilService } from '../../services/util.service'
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  onSubmit() {
    this.utilService.contact(this.contactForm.value)
      .subscribe((response) => {
        this.contactForm.reset();
        Swal.fire(
          'Mensagem enviada.',
          'Vamos análisar e entraremos em contato.',
          'success'
        )
      },
        (error: any) => console.log('>>>', error));
  }
}
