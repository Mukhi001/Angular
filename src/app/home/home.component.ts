import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,MatCardModule,ReversePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Angualar 18';
  subtitle='angular for beginners'
  todaydate=new Date();
  salary=1000;
  isDisabled=false;

  ChangeTitle(){
    this.title='Angular 188'
  }
  updateTitle(event:any){
this.title=event.target.value
  }
}
