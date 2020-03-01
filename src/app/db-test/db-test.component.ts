import { Component, OnInit } from '@angular/core';
import { RestService } from "src/app/shared/rest";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html',
  styleUrls: ['./db-test.component.scss']
})
export class DbTestComponent implements OnInit {

  chart = [];
  apiResponse: any;
  constructor(
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.restService.dbSchema().subscribe((res) => {
      this.apiResponse = res
      // console.log(res)

      let hits = res.map(res => res[6])
      let newrecord = res.map(res => res[7])
      let date = res.map(res => res[1])

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            { 
              data: hits,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data: newrecord,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
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
    });
  }

  onClick() {
    this.restService.insertIntoDB().subscribe()
  }
}
