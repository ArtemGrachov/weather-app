import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const SHARED_MODULES = [
    ReactiveFormsModule,
    HttpClientModule
]

@NgModule({
    imports: SHARED_MODULES,
    exports: SHARED_MODULES
})
export class SharedModule { }