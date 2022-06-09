import { Component, Input, OnInit } from '@angular/core';
import { ChampService } from 'src/app/services/champ.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Champ } from 'src/app/models/champ.model';

@Component({
  selector: 'app-champ-details',
  templateUrl: './champ-details.component.html',
  styleUrls: ['./champ-details.component.css']
})
export class ChampDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentChamp: Champ = {
    full_name: '',
    age: '',
    gender: '',
    team: ''
  };
  
  message = '';

  constructor(
    private champService: ChampService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getChamp(this.route.snapshot.params["id"]);
    }
  }

  getChamp(id: string): void {
    this.champService.get(id)
      .subscribe({
        next: (data) => {
          this.currentChamp = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updateChamp(): void {
    this.message = '';

    this.champService.update(this.currentChamp.id, this.currentChamp)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Champ was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteChamp(): void {
    this.champService.delete(this.currentChamp.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/champs']);
        },
        error: (e) => console.error(e)
      });
  }

}
