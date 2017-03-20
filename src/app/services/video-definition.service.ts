import { Injectable } from "@angular/core";
import { VIDEO_DEFINITIONS } from "../mocks/mock-video-definitions";
import { VideoDefinition } from "../objects/video-definition";

@Injectable()
export class VideoDefinitionService {
  getVideoDefinitions(): VideoDefinition[] {
    return VIDEO_DEFINITIONS;
  }
}
