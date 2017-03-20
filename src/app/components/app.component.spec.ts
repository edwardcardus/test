import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { VideoStandard } from "../objects/video-standard";
import { VideoClipsFilterPipe } from "../pipes/video-clips-filter.pipe";

describe("The AppComponent component", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        VideoClipsFilterPipe
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it("should display total duration of '00:02:11:01' when all PAL SD video clips are added", () => {
    let element: HTMLElement = fixture.debugElement.query(By.css("#total-duration")).nativeElement;

    component.showReel.videoClips = component.videoClips.filter(item => item.videoStandard.name == "PAL" && item.videoDefinition.name == "SD");
    fixture.detectChanges();

    expect(element.textContent).toContain("00:02:11:01");
  });

  it("should display total duration of '00:00:54:08' when all NTSC SD video clips are added", () => {
    let element: HTMLElement = fixture.debugElement.query(By.css("#total-duration")).nativeElement;

    component.showReel.videoClips = component.videoClips.filter(item => item.videoStandard.name == "NTSC" && item.videoDefinition.name == "SD");
    fixture.detectChanges();

    expect(element.textContent).toContain("00:00:54:08");
  });
});
