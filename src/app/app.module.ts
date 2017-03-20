import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import { VideoClipsFilterPipe } from "./pipes/video-clips-filter.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    VideoClipsFilterPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
