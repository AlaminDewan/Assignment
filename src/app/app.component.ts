import { Component, OnInit } from '@angular/core';
import { PersonalLaonService } from './services/personal-laon.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Personal-loan';

  listingData = [];

  constructor(private personalLaonService: PersonalLaonService) { }


  ngOnInit() {
    // listing data is retrieved here; which data need be displayed in html is not clear. ***
    // To check the data; run the project and  check your console. ***
    this.personalLaonService.getJsonData().then(
      (response: any) => {
        this.listingData = response.rates;
        console.log("here is the listing data :", this.listingData);
      }
    )
      .catch(error => {
        // should display error message 
        console.log("lerror :", error);
      })
  }

}
