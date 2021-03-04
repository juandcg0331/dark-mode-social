import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  matched: boolean = false;
 
  ngOnInit(): void {
   const checkbox: any = document.querySelector('#checkbox');
   if(this.getMatched()){
    checkbox.setAttribute('checked', true);
   }

   checkbox.addEventListener('change', function(event) {
     if(this.checked) {
       document.body.classList.remove('is-light-mode')
       document.body.classList.add('is-dark-mode')
     } else {
       document.body.classList.remove('is-dark-mode')
       document.body.classList.add('is-light-mode')
     }
   })
  }
  getMatched():boolean {
      this.matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return this.matched;
  }
  
}
