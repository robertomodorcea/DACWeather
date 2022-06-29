import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Brasov';
  weatherData?: WeatherData;

  ngOnInit(): void {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  onSubmit() {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
      next: (response) => {
      this.weatherData = response;
      console.log(response);
      }
  });
  }

}
