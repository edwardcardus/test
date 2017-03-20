import { Pipe, PipeTransform } from '@angular/core';
import { VideoDefinition } from "../objects/video-definition";
import { VideoStandard } from "../objects/video-standard";

@Pipe({
  name: "videoClipsFilter"
})
export class VideoClipsFilterPipe implements PipeTransform {
  transform(items: any[], videoStandard: VideoStandard, videoDefinition: VideoDefinition): any[] {
    return items.filter(item => item.videoStandard == videoStandard && item.videoDefinition == videoDefinition);
  }
}
