import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from '../modules/weather.module';
import { envirnoment } from '../envirnoment/envirnoment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) {}

  getWeatherData(cityname : string): Observable<weatherData> {
    return this.http.get<weatherData>(envirnoment.openWeatherBaseUrl + '/weather',{
      params :new HttpParams()
      .set('q',cityname)   
      .set('units','metric')   
      .set('mode','json')   
      .set('appid',envirnoment.openWeatherAPIKey)   
      
      
    })
  }

}

