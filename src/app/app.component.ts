import { Component, HostListener } from '@angular/core';
import { AppService } from './app.service';

/**
 * @author Harsh Mistry
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _appService: AppService) {}

  /**
   * Listen for tab refresh/close/redirect to clear local storage
   * @param event 
   */
  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    this._appService.resetLocalDb();
    console.log('Local DB cleared');
  }
}
