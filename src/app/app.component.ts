import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = 'Neque porro quisquam est qui dolorem ipsum';
  enteredText = '';
  onInput(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
    // console.log(this.enteredText);
  }
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
