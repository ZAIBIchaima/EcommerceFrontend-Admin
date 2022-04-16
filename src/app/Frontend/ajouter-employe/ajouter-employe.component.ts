import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeServiceService } from '../../Services/employe-service.service';

@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.scss']
})
export class AjouterEmployeComponent implements OnInit {

  employe: any;
  form: FormGroup;

  constructor(public EmployeService: EmployeServiceService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      cin: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      prenom: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      adresse: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      mail: new FormControl('', [Validators.required, Validators.pattern('^[a-zAZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      age: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      etet: new FormControl(''),

    });
  }
  submit(userForm) {
    if (userForm.valid != '') {
      this.EmployeService.create(userForm.value).subscribe(res => {
        console.log(userForm.value)
        // console.log('employe created successfully!');
        this.router.navigateByUrl('/table-employe');
      })
      Swal.fire({
        position: 'bottom-end',
        title: 'Ajouter avec succés ',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      });
      //alert("Ajouter Avec succés ")
      //location.reload();
    }
    else {
      Swal.fire({
        position: 'bottom-end',
        title: 'Verfier les champs ',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      });
    }

  }

}
