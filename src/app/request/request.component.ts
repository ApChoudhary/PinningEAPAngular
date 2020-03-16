import { Component, OnInit, Input, HostListener } from '@angular/core';
import { RestService } from "src/app/shared/rest";
import { DbTestComponent } from '../db-test/db-test.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-request-page',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})


export class RequestComponent implements OnInit {
  submitRequestForm: FormGroup;
  //form: FormGroup;
  apiResponse: any;
  submitted = false;
  constructor(
    private restService: RestService,
    private DbTestComponent: DbTestComponent,
    private router: Router, 
    private formBuilder: FormBuilder ) { }

  services=["Pinning","Convert","CASS"];
  selectedService: string = "Select Service";
  requestTypes=["Enable","Disable","Others"];
  selectedRequest: string = "Select Request Type";

  ngOnInit(): void {
    this.submitRequestForm = this.formBuilder.group({
      
      // service: ['', Validators.required],
      // request: ['', Validators.required],
      reason: [null, Validators.required],
      description:[null, Validators.required],
      requestorName: [null, Validators.required],
      requestorEmail: [null, [Validators.required, Validators.email]],
      clientName: [null, Validators.required],
      sendCopyTo:[null]

      // email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
       });
  }

  get f() { return this.submitRequestForm.controls; }

  ChangeService(newService: string) { 
    this.selectedService = newService;  }

  ChangeRequest(newRequest: string) { 
    this.selectedRequest = newRequest; }

  private formSubmitAttempt: boolean;
 
    onSubmit() {
      debugger;
      if (!this.submitRequestForm.valid) {
        alert("The form is invalid");   
        this.formSubmitAttempt = false;
      }
      else{
      this.formSubmitAttempt = true;
      alert("The form was submitted");
      this.restService.insertRequestIntoDB(this.selectedService,this.selectedRequest,this.f).subscribe()
      this.submitRequestForm.reset();

      }
    }
}
