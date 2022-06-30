import { Component, OnInit } from '@angular/core';

declare const h337: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pendulos: any[] = [];
  gradientCfg = {
    0.2: '#3DAC79',
    0.4: '#3DE95A',
    0.6: '#D6E95A',
    0.8: '#D6B25A',
    1.0: '#D6505A',
  };
  heatmap: any = null;

  ngOnInit(): void {
    this.createHeatMap();
    this.pendulos = [
      {
        sensores: [
          '38,5',
          '37,3',
          '29,9',
          '29,3',
          '30,3',
          '29,3',
          '29,7',
          '27,1',
        ],
      },
      {
        sensores: [
          '38,5',
          '37,3',
          '29,9',
          '29,3',
          '30,3',
          '29,3',
          '29,7',
          '27,1',
        ],
      },
      {
        sensores: [
          '38,5',
          '37,3',
          '29,9',
          '29,3',
          '30,3',
          '29,3',
          '29,7',
          '27,1',
        ],
      },
      {
        sensores: [
          '38,5',
          '37,3',
          '29,9',
          '29,3',
          '30,3',
          '29,3',
          '29,7',
          '27,1',
        ],
      },
      {
        sensores: [
          '38,5',
          '37,3',
          '29,9',
          '29,3',
          '30,3',
          '29,3',
          '29,7',
          '27,1',
        ],
      },
    ];
  }

  createHeatMap(): void {
    const config = {
      container: document.querySelector('.heatmap'),
      opacity: 1,
      radius: 10,
      visible: true,
      blur: 0.75,
      gradient: this.gradientCfg,
      backgroundColor: 'inherit',
    };

    this.heatmap = h337.create(config);

    const data: any = {
      max: 100,
      min: 0,
      data: [
        { x: 170, y: 190, value: 100, radius: 40 },
        { x: 170, y: 180, value: 100, radius: 30 },
        { x: 170, y: 170, value: 100, radius: 70 },
        { x: 170, y: 160, value: 100, radius: 40 },
        { x: 170, y: 150, value: 100, radius: 50 },
        { x: 170, y: 140, value: 100, radius: 60 },
        { x: 170, y: 130, value: 100, radius: 15 },
        { x: 170, y: 120, value: 100, radius: 15 },
        { x: 170, y: 110, value: 100, radius: 15 },
        { x: 170, y: 100, value: 100, radius: 20 },
        { x: 170, y: 200, value: 100, radius: 10 },
        { x: 200, y: 250, value: 100, radius: 150 },
        { x: 150, y: 250, value: 100, radius: 170 },
      ],
    };

    this.heatmap.setData(data);
  }
}
