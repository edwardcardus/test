import { Injectable } from "@angular/core";
import { VIDEO_CLIPS } from "../mocks/mock-video-clips";
import { VideoClip } from "../objects/video-clip";

@Injectable()
export class VideoClipService {
  getVideoClips(): VideoClip[] {
    return VIDEO_CLIPS;
  }
}
