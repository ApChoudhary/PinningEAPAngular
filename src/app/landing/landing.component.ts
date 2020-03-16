import { Component, OnInit, Input, HostListener } from '@angular/core';
import { RestService } from "src/app/shared/rest";
import { DbTestComponent } from '../db-test/db-test.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  apiResponse: any;
  constructor(
    private restService: RestService,
    private DbTestComponent: DbTestComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restService.landing().subscribe((data) => {
      this.apiResponse = data
    });
  }

  // @Input() chartShow: DbTestComponent;

  // @HostListener('click')
  // click() {
  //   this.chartShow.toggle();
  // }

  service = {
    "service": ""
  }

  renderChart(service) {
    this.restService.getChartData(service).subscribe((res) => {
      this.DbTestComponent.showChart(res)
    })
  }

  barChartShow = true;
  toggle(button: string) {
    console.log(button.toString());
    // this.barChartShow = !this.barChartShow;
    if(this.barChartShow==true)
    {
      this.service.service = button;
      this.renderChart(this.service);
    }
  }

  serviceDropdownShow = false;
  toggleService() {
    this.serviceDropdownShow = !this.serviceDropdownShow;
    if(this.serviceDropdownShow == false && this.barChartShow == true) {
      this.toggle("pinning");
    }
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
