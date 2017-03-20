import { TimeCode } from "../objects/time-code";
import { VideoDefinition } from "../objects/video-definition";
import { VideoStandard } from "../objects/video-standard";

export class VideoClip {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public videoStandard: VideoStandard,
		public videoDefinition: VideoDefinition,
		public startTimeCode: TimeCode,
		public endTimeCode: TimeCode
	) { }
}
