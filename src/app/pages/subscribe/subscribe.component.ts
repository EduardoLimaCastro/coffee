import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  public disabled = true;
  public enabled = false;

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
}
