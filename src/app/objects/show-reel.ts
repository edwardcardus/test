import { TimeCode } from "../objects/time-code";
import { VideoClip } from "../objects/video-clip";
import { VideoDefinition } from "../objects/video-definition";
import { VideoStandard } from "../objects/video-standard";

export class ShowReel {
	public name: string;
	public videoStandard: VideoStandard;
	public videoDefinition: VideoDefinition;
	public videoClips: VideoClip[];

	constructor() {
		this.name = "";
		this.videoStandard = null;
		this.videoDefinition = null;
		this.videoClips = [];
	}

	public totalDuration(): TimeCode {
		let returnValue: TimeCode = new TimeCode(0, 0, 0, 0);

		for (let videoClip of this.videoClips) {
			returnValue.add(videoClip.endTimeCode, videoClip.videoStandard.framesPerSecond);
		}

		return returnValue;
	}
}
