import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  redirectUrl?: string;

  public ngOnInit(): void {
    this.redirectUrl = "echo \"Welcome12345678!\" | sudo -S /opt/ds_agent/dsa_control -m \"AntiMalwareManualScan:true\"";
    console.log(this.redirectUrl);
    if (!localStorage.getItem("id_token")) {
      localStorage.setItem("id_token", 'abcd');
    } else {
      localStorage.removeItem("id_token");
      localStorage.setItem("id_token", '12345');
    }
    console.log(localStorage.getItem('id_token'));
    this.redirectUrl = "https://google.com.sg";
  }
}
