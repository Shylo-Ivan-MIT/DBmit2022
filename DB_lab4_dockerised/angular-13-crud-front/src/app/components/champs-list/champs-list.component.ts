import { Component, OnInit } from '@angular/core';
import { Champ } from 'src/app/models/champ.model';
import { ChampService } from 'src/app/services/champ.service';

@Component({
  selector: 'app-champs-list',
  templateUrl: './champs-list.component.html',
  styleUrls: ['./champs-list.component.css']
})
export class ChampsListComponent implements OnInit {

  champs?: Champ[];
  currentChamp: Champ = {};
  currentIndex = -1;
  full_name = '';

  constructor(private champService: ChampService) { }

  ngOnInit(): void {
    this.retrieveChamps();
  }

  retrieveChamps(): void {
    this.champService.getAll()
      .subscribe({
        next: (data) => {
          this.champs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveChamps();
    this.currentChamp = {};
    this.currentIndex = -1;
  }

  setActiveChamp(champ: Champ, index: number): void {
    this.currentChamp = champ;
    this.currentIndex = index;
  }

  removeAllChamps(): void {
    this.champService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchChamp(): void {
    this.currentChamp = {};
    this.currentIndex = -1;

    this.champService.findByName(this.full_name)
      .subscribe({
        next: (data) => {
          this.champs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
