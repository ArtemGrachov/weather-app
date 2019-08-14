import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './components/root/root.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ForecastService } from './services/forecast.service';
import { SharedModule } from './modules/shared/shared.module';
import { ForecastDayComponent } from './components/forecast-day/forecast-day.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    RootComponent,
    ForecastDayComponent,
    SearchFormComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    ForecastService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
