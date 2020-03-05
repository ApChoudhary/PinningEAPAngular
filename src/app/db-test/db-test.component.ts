import { Component, HostBinding } from '@angular/core';
import { RestService } from "src/app/shared/rest";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html',
  styleUrls: ['./db-test.component.scss']
})
export class DbTestComponent {

  chart = [];
  apiResponse: any;
  constructor(
    private restService: RestService
  ) { }

  showChart(res) {
    // this.apiResponse = res
    console.log(res)

    let hits = res.map(res => res[6])
    let newrecord = res.map(res => res[7])
    let source = res.map(res => res[5])

    this.chart = new Chart('canvas', {
      type: 'horizontalBar',
      data: {
        labels: source,
        datasets: [
          { 
            data: hits,
            borderColor: "#3cba9f",
            fill: false,
            backgroundColor: "#3cba9f",
            label: 'hits',
            barPercentage: 0.5,
            barThickness: 60
          },
          { 
            data: newrecord,
            borderColor: "#ffcc00",
            fill: false,
            backgroundColor: "#ffcc00",
            label: 'new',
            barThickness: 60,
          },
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: 'black'
          },
          barPercentage: 0.1,
          categoryPercentage: 0.5
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  onClick() {
    this.restService.insertIntoDB().subscribe()
  }

  @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
