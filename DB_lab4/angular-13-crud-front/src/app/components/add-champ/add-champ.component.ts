import { Component, OnInit } from '@angular/core';
import { Champ } from 'src/app/models/champ.model';
import { ChampService } from 'src/app/services/champ.service';

@Component({
  selector: 'app-add-champ',
  templateUrl: './add-champ.component.html',
  styleUrls: ['./add-champ.component.css']
})
export class AddChampComponent implements OnInit {

  champ: Champ = {
    full_name: '',
    age: '',
    gender: '',
    team: ''
  };
  submitted = false;

  constructor(private champService: ChampService) { }

  ngOnInit(): void {
  }

  saveChamp(): void {
    const data = {
      full_name: this.champ.full_name,
      age:  this.champ.age,
      gender:  this.champ.gender,
      team:  this.champ.team
    };

    this.champService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newChamp(): void {
    this.submitted = false;
    this.champ = {
      full_name: '',
      age: '',
      gender: '',
      team: ''
    };
  }

}
