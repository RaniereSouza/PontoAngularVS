import { Component, Inject } from '@angular/core';
import { HttpClient }        from '@angular/common/http';

interface WeatherForecast {
  date:         string;
  temperatureC: number;
  temperatureF: number;
  summary:      string;
}

@Component({
  selector:    'app-fetch-data',
  templateUrl: './fetch-data.page.html'
})
export class FetchDataPage {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}