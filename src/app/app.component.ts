import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-employeelist></app-employeelist>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Tom';
}
