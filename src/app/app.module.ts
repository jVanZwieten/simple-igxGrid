import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxGridModule } from 'igniteui-angular/main';
import { HomeComponent } from './home/home.component';
import { MyGridComponent } from "./my-grid/my-grid.component";
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MyGridComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		IgxNavigationDrawerModule,
		IgxNavbarModule,
		IgxLayoutModule,
		IgxRippleModule,
		IgxGridModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
