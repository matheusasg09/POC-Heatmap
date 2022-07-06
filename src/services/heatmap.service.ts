import { Injectable } from '@angular/core';
import { heatmapPoints } from '../app/constants/heatmap-value';
import { map, Observable, of } from 'rxjs';
import { HeatmapPoint } from 'src/models/heatmap.interface';

@Injectable({
  providedIn: 'root',
})
export class HeatmapService {
  constructor() {}

  getHeatmapPoints(): Observable<HeatmapPoint[]> {
    return of(heatmapPoints);
    // return of(heatmapPoints).pipe(
    //   map((point) => ({
    //     ...point,
    //     value: this.convertTemperatureValue(point),
    //   }))
    // );
  }

  private convertTemperatureValue(heatmapPoint: HeatmapPoint): number {
    const temperature = heatmapPoint.value;

    if (temperature < 6) {
      return 10;
    }
    if (temperature >= 6 && temperature <= 10) {
      return 20;
    }
    if (temperature > 10 && temperature <= 14) {
      return 30;
    }
    if (temperature > 14 && temperature <= 18) {
      return 40;
    }
    if (temperature > 18 && temperature <= 22) {
      return 50;
    }
    if (temperature > 22 && temperature <= 26) {
      return 60;
    }
    if (temperature > 26 && temperature <= 30) {
      return 70;
    }
    if (temperature > 30 && temperature <= 34) {
      return 80;
    }
    if (temperature > 34 && temperature <= 36) {
      return 90;
    }
    if (temperature > 36) {
      return 100;
    }

    return 0;
  }
}
