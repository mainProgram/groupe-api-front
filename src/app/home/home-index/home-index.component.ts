import { Component, OnInit } from '@angular/core';
import { ShuffleService } from 'src/app/shared/services/shuffle.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {

  public groupes : any = []

  constructor(private shuffleService:ShuffleService) { }

  ngOnInit(): void {
    this.shuffleService.getGroupesFormes().subscribe({next: data => {  this.groupes = data; }})
  }

  melanger(){
    this.ngOnInit();
  }
}
