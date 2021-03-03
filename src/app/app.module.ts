import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
