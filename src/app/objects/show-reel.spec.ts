import {} from "jasmine";
import { ShowReel } from "../objects/show-reel";
import { TimeCode } from "../objects/time-code";
import { VideoClip } from "../objects/video-clip";
import { VideoDefinition } from "../objects/video-definition";
import { VideoStandard } from "../objects/video-standard";

describe("The ShowReel class", () => {
  describe("totalDuration function", () => {
    let showReel: ShowReel = new ShowReel();
    showReel.videoStandard = new VideoStandard(1, "", 25);
    showReel.videoClips = [
    	new VideoClip(
    		1,
    		"",
    		"",
        new VideoStandard(1, "", 25),
        new VideoDefinition(1, ""),
    		new TimeCode(0, 0, 0, 0),
    		new TimeCode(0, 0, 0, 10)
    	),
      new VideoClip(
    		2,
    		"",
    		"",
        new VideoStandard(1, "", 25),
        new VideoDefinition(1, ""),
    		new TimeCode(0, 0, 0, 0),
    		new TimeCode(0, 0, 0, 20)
    	),
      new VideoClip(
    		3,
    		"",
    		"",
        new VideoStandard(1, "", 25),
        new VideoDefinition(1, ""),
    		new TimeCode(0, 0, 0, 0),
    		new TimeCode(0, 0, 0, 30)
    	)
    ];

    it("should equal 00:00:02:10 when given 3 video clips totalling 00:00:02:10 in duration", () => expect(showReel.totalDuration()).toEqual(new TimeCode(0, 0, 2, 10)));
  });
});
