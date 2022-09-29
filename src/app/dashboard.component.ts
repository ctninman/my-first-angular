import { Component } from "@angular/core";

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  loadState = "... LOADING ..."

  onSwitchState () {
    this.loadState = "LOADED ✅"
  }
}
