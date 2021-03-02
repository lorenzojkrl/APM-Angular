import { Component } from '@angular/core';

// Component metadata
@Component({
  // specifiy selector for the name of component when used as directive in HTML
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <div>My first component bla!</div>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'First Angular App, Aho!';
}
