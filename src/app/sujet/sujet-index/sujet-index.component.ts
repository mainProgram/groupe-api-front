import { Component, OnInit } from '@angular/core';
import { SujetService } from 'src/app/shared/services/sujet.service';

@Component({
  selector: 'app-sujet-index',
  templateUrl: './sujet-index.component.html',
  styleUrls: ['./sujet-index.component.scss']
})
export class SujetIndexComponent implements OnInit {

  public sujets : any = []

  constructor(private sujetService:SujetService) { }

  ngOnInit(): void {
    this.sujetService.getSujets().subscribe({next: data => {  this.sujets = data; }})
  }

}
