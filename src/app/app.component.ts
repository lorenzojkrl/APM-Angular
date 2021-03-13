import { Component } from '@angular/core';

// Component metadata
@Component({
  // specifiy selector for the name of component when used as directive in HTML
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link">Home</a></li>
        <li><a class="nav-link">Product List</a></li>
      </ul>
    </nav>
  `,
})
export class AppComponent {
  pageTitle: string = 'First Angular App, Ahooo!';
}
