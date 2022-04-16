import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../../Services/message.service';
import { FactureService } from '../../Services/facture.service';
import { Facture } from './Facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  closeResult: string;
  factures: any;
  searchText: string;
  constructor(private modalService: NgbModal, private router: Router,
    private messageService: MessageService, public FactureService: FactureService) { }


  ngOnInit() {
    this.AfficheFacture()
    this.getMessage()
  }

  AfficheFacture() {
    this.FactureService.getAll().subscribe((data: Facture[]) => {
      this.factures = data;
      console.log(this.factures);
    })
  }
  //Message
  getMessage() {
    this.messageService.getMessage().subscribe(
      (data) => {
        this.AfficheFacture();
      });
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
}
