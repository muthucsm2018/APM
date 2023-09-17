import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ConvertToSpacesPipe } from './products/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { WelcomeComponent} from './home/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent, data: {title: 'Products'}},
      {path: 'welcome', component:WelcomeComponent, data: {title: 'Welcome'}}
    ])
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
