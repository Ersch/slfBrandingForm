import {Component, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html'
})
export default class HomeComponent {

  private formBuilder = inject(FormBuilder);
  protected sent = signal<boolean>(false);

  protected form = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    function: [''],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    services: this.formBuilder.array([
      this.formBuilder.group({
        visualIdentity: [false],
        webDesign: [false],
        socialMedia: [false],
        packaging: [false],
        audit: [false],
        freelance: [false],
      })
    ]),
    message: [''],
    startDate: [''],
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }
}
