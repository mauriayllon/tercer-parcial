import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1Component } from './components/provider1/provider1.component';
import { Provider2Component } from './components/provider2/provider2.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Provider1Component, 
    Provider2Component],
  exports:[
    Provider1Component, 
    Provider2Component]
})
export class ProviderModule { }