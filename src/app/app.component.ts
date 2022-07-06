import { Component, OnInit } from '@angular/core';
import { pendulosData1, pendulosData2 } from './constants/pendulos-data';
import { heatmapPoints, valueHeatmap2 } from './constants/heatmap-value';
import { HeatmapPoint } from 'src/models/heatmap.interface';
import { HeatmapService } from 'src/services/heatmap.service';

declare const h337: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private heatmapService: HeatmapService) {}

  pendulos: any[] = [];
  valueHeatmapData: HeatmapPoint[] = [];
  gradientCfg = {
    0.1: '#3D50F3',
    0.2: '#58BEF3',
    0.3: '#3DAC79',
    0.4: '#1ADD83',
    0.5: '#5AE9B5',
    0.6: '#D6E95A',
    0.7: '#FBBC05',
    0.8: '#ED892D',
    0.9: '#F97951',
    1.0: '#D6505A',
  };
  heatmap: any = null;
  siloType: string = '../assets/img/silo-vazio.svg';

  ngOnInit(): void {
    this.pendulos = pendulosData1;
    this.valueHeatmapData = heatmapPoints;
    this.createHeatMap();
  }

  changeSilo(event: any): void {
    if (event.value == 1) {
      this.pendulos = pendulosData1;
      this.heatmap.setData({ max: 100, min: 0, data: heatmapPoints });
      this.siloType = '../assets/img/silo-vazio.svg';
    } else {
      this.pendulos = pendulosData2;
      this.heatmap.setData({ max: 100, min: 0, data: valueHeatmap2 });
      this.siloType = '../assets/img/silo-plano-sem-chapeu.svg';
    }
  }

  private getHeatmapPoints(): void {
    this.heatmapService.getHeatmapPoints().subscribe({
      next: (heatmapPoints) => {
        this.valueHeatmapData = heatmapPoints;
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  private createHeatMap(): void {
    const config = {
      container: document.querySelector('.heatmap'),
      opacity: 1,
      radius: 10,
      visible: true,
      blur: 0.8,
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
