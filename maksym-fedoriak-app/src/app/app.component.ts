import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maksym-fedoriak-app';
  navBarTitle = this.title.replace(/-/gi, " ");

}
