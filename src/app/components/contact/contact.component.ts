import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserContact } from 'src/app/models/modelo';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  nombrePattern="^[a-zA-Z ]*$"
  telPattern="^[0-9]{7,10}"
  //telPattern="^((\\+51-?)|0)?[0-9]{11}$"
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  textoPattern="^[a-zA-Z ,-0-9]*$"

  telephoneNumber=""

  userForm= new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.maxLength(40), Validators.pattern(this.nombrePattern)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(this.telPattern)]),
    email: new FormControl('', [Validators.pattern(this.emailPattern), Validators.required, Validators.maxLength(30)]),
    text: new FormControl('',[Validators.maxLength(150), Validators.pattern(this.textoPattern)])
  });



  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    ){
    /*this.userForm = this.fb.group({
      nombre: ['',[Validators.required, Validators.maxLength(20), Validators.pattern(this.nombrePattern)]] ,
      telefono: ['', [Validators.required, Validators.pattern(this.telPattern)]] ,
      email: ['', Validators.pattern(this.emailPattern)] ,
      texto: ['', [Validators.maxLength(60), Validators.pattern(this.textoPattern)]]
    })*/
  }

  ngOnInit(): void {
    
  }

  guardarContacto(){
    console.log(this.userForm)
    this.toastr.success('Se ha enviado la informacion exitosamente', 'Correcto!!');
    this.userForm.reset()
  }
}
