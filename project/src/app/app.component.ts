import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  isLoading = false;
   constructor(private router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.isLoading = false;
      }
    });
  }
}
