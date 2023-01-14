import { Component, OnInit } from '@angular/core';
import { IEtudiant } from 'src/app/shared/interfaces/Etudiant';
import { EtudiantService } from 'src/app/shared/services/etudiant.service';

@Component({
  selector: 'app-etudiant-index',
  templateUrl: './etudiant-index.component.html',
  styleUrls: ['./etudiant-index.component.scss']
})
export class EtudiantIndexComponent implements OnInit {

  public etudiants : any = []

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {

    this.etudiantService.getEtudiants().subscribe({next: data => {  this.etudiants = data; }})

  }

}
