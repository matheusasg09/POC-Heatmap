import { Component, OnInit } from '@angular/core';
import { pendulosData1, pendulosData2 } from './constants/pendulos-data';
import { valueHeatmap1, valueHeatmap2 } from './constants/heatmap-value';

declare const h337: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pendulos: any[] = [];
  valueHeatmapData: any[] = [];
  gradientCfg = {
    0.2: '#3DAC79',
    0.4: '#3DE95A',
    0.6: '#D6E95A',
    0.8: '#D6B25A',
    1.0: '#D6505A',
  };
  heatmap: any = null;

  ngOnInit(): void {
    this.pendulos = pendulosData1;
    this.valueHeatmapData = valueHeatmap1;
    this.createHeatMap();
  }

  changeSilo(event: any): void {
    if (event.value == 1) {
      this.pendulos = pendulosData1;
      this.heatmap.setData({ max: 100, min: 0, data: valueHeatmap1 });
    } else {
      this.pendulos = pendulosData2;
      this.heatmap.setData({ max: 100, min: 0, data: valueHeatmap2 });
    }
  }

  private createHeatMap(): void {
    const config = {
      container: document.querySelector('.heatmap'),
      opacity: 0.9,
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
      data: this.valueHeatmapData,
    };

    this.heatmap.setData(data);
  }
}
