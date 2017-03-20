import { Component } from "@angular/core";
import { ShowReel } from "../objects/show-reel";
import { VideoClip } from "../objects/video-clip";
import { VideoDefinition } from "../objects/video-definition";
import { VideoStandard } from "../objects/video-standard";
import { VideoClipService } from "../services/video-clip.service";
import { VideoDefinitionService } from "../services/video-definition.service";
import { VideoStandardService } from "../services/video-standard.service";

@Component({
  providers: [
    VideoClipService,
    VideoDefinitionService,
    VideoStandardService
  ],
  selector: "app",
  template: `
    <header>
      <h1>Show reel creator</h1>
    </header>
    <div id="container">
      <div id="editor">
        <h2>Editor</h2>
        <div class="field-container">
          <label>Name</label>
          <input type="text" [(ngModel)]="showReel.name">
        </div>
        <div class="field-container">
          <label>Video standard</label>
          <select [(ngModel)]="showReel.videoStandard" (change)="deselectVideoClips()">
            <option *ngFor="let videoStandard of videoStandards" [ngValue]="videoStandard">{{videoStandard.name}}</option>
          </select>
        </div>
        <div class="field-container">
          <label>Video definition</label>
          <select [(ngModel)]="showReel.videoDefinition" (change)="deselectVideoClips()">
            <option *ngFor="let videoDefinition of videoDefinitions" [ngValue]="videoDefinition">{{videoDefinition.name}}</option>
          </select>
        </div>
        <div class="field-container">
          <label>Video clips</label>
          <div class="video-clip-container">
            <p *ngIf="!areVideoPropertiesDefined()">Please select both a video standard and a video definition to load the available video clips.</p>
            <ul *ngIf="areVideoPropertiesDefined()">
              <li *ngFor="let videoClip of videoClips | videoClipsFilter:showReel.videoStandard:showReel.videoDefinition" (click)="toggleVideoClip(videoClip)" [class.selected]="isVideoClipSelected(videoClip)">
                <h3>{{videoClip.name}}</h3>
                <p>{{videoClip.description}}</p>
                <table>
                  <tr>
                    <th>Video standard:</th>
                    <td>{{videoClip.videoStandard.name}}</td>
                  </tr>
                  <tr>
                    <th>Video definition:</th>
                    <td>{{videoClip.videoDefinition.name}}</td>
                  </tr>
                  <tr>
                    <th>Start timecode:</th>
                    <td>{{videoClip.startTimeCode.toString()}}</td>
                  </tr>
                  <tr>
                    <th>End timecode:</th>
                    <td>{{videoClip.endTimeCode.toString()}}</td>
                  </tr>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="preview">
        <h2>Preview</h2>
        <div class="field-container">
          <div class="label">Name</div>
          <div>{{showReel.name || "&nbsp;"}}</div>
        </div>
        <div class="field-container">
          <div class="label">Video standard</div>
          <div>{{showReel.videoStandard?.name || "&nbsp;"}} </div>
        </div>
        <div class="field-container">
          <div class="label">Video definition</div>
          <div>{{showReel.videoDefinition?.name || "&nbsp;"}} </div>
        </div>
        <div class="field-container">
          <div class="label">Total duration</div>
          <div id="total-duration">{{showReel.totalDuration().toString()}}</div>
        </div>
        <div class="field-container">
          <label>Video clips</label>
          <div class="video-clip-container">
            <p *ngIf="showReel.videoClips.length == 0">No video clips have been added.</p>
            <ul *ngIf="showReel.videoClips.length != 0">
              <li *ngFor="let videoClip of showReel.videoClips">
                <h3>{{videoClip.name}}</h3>
                <p>{{videoClip.description}}</p>
                <table>
                  <tr>
                    <th>Video standard:</th>
                    <td>{{videoClip.videoStandard.name}}</td>
                  </tr>
                  <tr>
                    <th>Video definition:</th>
                    <td>{{videoClip.videoDefinition.name}}</td>
                  </tr>
                  <tr>
                    <th>Start timecode:</th>
                    <td>{{videoClip.startTimeCode.toString()}}</td>
                  </tr>
                  <tr>
                    <th>End timecode:</th>
                    <td>{{videoClip.endTimeCode.toString()}}</td>
                  </tr>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  showReel: ShowReel;
  videoClips: VideoClip[];
  videoDefinitions: VideoDefinition[];
  videoStandards: VideoStandard[];

  constructor(
    private videoClipService: VideoClipService,
    private videoDefinitionService: VideoDefinitionService,
    private videoStandardService: VideoStandardService
  ) {
    this.showReel = new ShowReel();
    this.videoClips = videoClipService.getVideoClips();
    this.videoDefinitions = videoDefinitionService.getVideoDefinitions();
    this.videoStandards = videoStandardService.getVideoStandards();
  }

  deselectVideoClips(): void {
    this.showReel.videoClips = [];
  }

  toggleVideoClip(videoClip: VideoClip): void {
    if (this.isVideoClipSelected(videoClip)) {
      this.showReel.videoClips = this.showReel.videoClips.filter(item => item != videoClip);
    } else {
      this.showReel.videoClips.push(videoClip);
    }
  }

  isVideoClipSelected(videoClip: VideoClip): boolean {
    return this.showReel.videoClips.indexOf(videoClip) >= 0
  }

  areVideoPropertiesDefined(): boolean {
    return this.showReel.videoStandard != null && this.showReel.videoDefinition != null;
  }
}
