import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, AfterViewInit {
  constructor(private weatherService: WeatherService) {}

  @ViewChild('searchInput', { static: true })
  searchInput: ElementRef;

  cityName: string = 'Nitra';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  ngAfterViewInit(): void {
    this.searchInput.nativeElement.focus();
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((weatherData) => (this.weatherData = weatherData));
  }
}
