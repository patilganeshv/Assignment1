import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    {{ heading1 }}
  </h1>
  <h1>
    {{ heading2 }}
  </h1>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading1 = 'Marvellous Infosystems';
  heading2 = 'Educating for better tomorrow';
}
