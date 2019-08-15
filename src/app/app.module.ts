import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './components/root/root.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ForecastService } from './services/forecast.service';
import { SharedModule } from './modules/shared/shared.module';
import { ForecastDayComponent } from './components/forecast-day/forecast-day.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchEffects } from './store/effects/search.effects';
import { LocationsService } from './services/locations.service';
import { ForecastEffects } from './store/effects/forecast.effects';
import { LocationsEffects } from './store/effects/locations.effects';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    RootComponent,
    ForecastDayComponent,
    SearchFormComponent,
    LocationComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ForecastEffects, SearchEffects, LocationsEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    ForecastService,
    LocationsService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
