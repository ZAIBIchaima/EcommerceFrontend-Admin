import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../../Services/message.service';
import { Employe } from '../Employe';
import Swal from 'sweetalert2'
import { EmployeServiceService } from '../../Services/employe-service.service';

@Component({
  selector: 'app-afficher-employe',
  templateUrl: './afficher-employe.component.html',
  styleUrls: ['./afficher-employe.component.scss']
})
export class AfficherEmployeComponent implements OnInit {
  closeResult: string;
  employes: any;
  searchText: string;

  constructor(private modalService: NgbModal, private router: Router,
    private messageService: MessageService, public employeService: EmployeServiceService) { }

  ngOnInit(): void {
    this.AfficheEmploye()
    this.getMessage();
  }

  //Affiche Employe
  AfficheEmploye() {
    this.employeService.getAll().subscribe((data: Employe[]) => {
      this.employes = data;
      console.log(this.employes);
    })
  }

  //Supprimer Employe
  SupprimerEmploye(id) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Supprimer Avec succés ',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.employeService.Delete(id).subscribe((data) => {
          this.messageService.setMessage('delete  employe ');
          // console.log(this.articles);
        })
      }
    })

  }

  //Message
  getMessage() {
    this.messageService.getMessage().subscribe(
      (data) => {
        this.AfficheEmploye();
      });
  }

  //Modifier Employe
  ModifierEmploye(id) {
    localStorage.setItem('id', id)
    this.router.navigateByUrl('/ModifierEmploye/' + id);
  }

  //
  openLarge(content, id) {
    this.modalService.open(content, {
      size: 'lg'
    });
    localStorage.setItem('idP', id);
  }

  //
  open(content) {

    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //
  formulaireAjouter() {
    this.router.navigateByUrl('/AjouterEmploye');
  }

}
