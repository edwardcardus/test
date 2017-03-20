import { Injectable } from "@angular/core";
import { VIDEO_STANDARDS } from "../mocks/mock-video-standards";
import { VideoStandard } from "../objects/video-standard";

@Injectable()
export class VideoStandardService {
  getVideoStandards(): VideoStandard[] {
    return VIDEO_STANDARDS;
  }
}
