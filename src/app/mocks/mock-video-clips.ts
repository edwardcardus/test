import { VIDEO_DEFINITIONS } from "./mock-video-definitions";
import { VIDEO_STANDARDS } from "./mock-video-standards";
import { TimeCode } from "../objects/time-code";
import { VideoClip } from "../objects/video-clip";

export const VIDEO_CLIPS: VideoClip[] = [
	new VideoClip(
		1,
		"Bud Light",
		"A factory is working on the new Bud Light Platinum",
		VIDEO_STANDARDS.find(item => item.id == 2),
		VIDEO_DEFINITIONS.find(item => item.id == 2),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 30, 12)
	),
	new VideoClip(
		2,
		"M&Ms",
		"At a party, a brown-shelled M&M is mistaken for being naked. As a result, the red M&M tears off its skin and dances to \"Sexy and I Know It\" by LMFAO",
		VIDEO_STANDARDS.find(item => item.id == 1),
		VIDEO_DEFINITIONS.find(item => item.id == 2),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 15, 27)
	),
	new VideoClip(
		3,
		"Audi",
		"A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the vampires, with him wondering where everyone went afterwards",
		VIDEO_STANDARDS.find(item => item.id == 2),
		VIDEO_DEFINITIONS.find(item => item.id == 2),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 1, 30, 0)
	),
	new VideoClip(
		4,
		"Chrysler",
		"Clint Eastwood recounts how the automotive industry survived the Great Recession.",
		VIDEO_STANDARDS.find(item => item.id == 2),
		VIDEO_DEFINITIONS.find(item => item.id == 2),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 10, 14)
	),
	new VideoClip(
		5,
		"Fiat",
		"A man walks through a street to discover a beautiful woman (Catrinel Menghia) standing on a parking space, who proceeds to approach and seduce him, when successfully doing so he then discovered he was about to kiss a Fiat 500 Abarth.",
		VIDEO_STANDARDS.find(item => item.id == 1),
		VIDEO_DEFINITIONS.find(item => item.id == 2),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 18, 11)
	),
	new VideoClip(
		6,
		"Pepsi",
		"People in the Middles Ages try to entertain their king (Elton John) for a Pepsi. While the first person fails, a mysterious person (Season 1 X Factor winner Melanie Amaro) wins the Pepsi by singing Aretha Franklin's Respect. After she wins, she overthrows the king and gives Pepsi to all the town.",
		VIDEO_STANDARDS.find(item => item.id == 1),
		VIDEO_DEFINITIONS.find(item => item.id == 2),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 20, 0)
	),
	new VideoClip(
		7,
		"Best Buy",
		"An ad featuring the creators of the cameraphone, Siri, and the first text message. The creators of Words with Friends also appear parodying the incident involving Alec Baldwin playing the game on an airplane.",
		VIDEO_STANDARDS.find(item => item.id == 2),
		VIDEO_DEFINITIONS.find(item => item.id == 1),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 10, 5)
	),
	new VideoClip(
		8,
		"Captain America: The First Avenger",
		"Video Promo",
		VIDEO_STANDARDS.find(item => item.id == 2),
		VIDEO_DEFINITIONS.find(item => item.id == 1),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 20, 10)
	),
	new VideoClip(
		9,
		"Volkswagen \"Black Beetle\"",
		"A computer-generated black beetle runs fast, as it is referencing the new Volkswagen model.",
		VIDEO_STANDARDS.find(item => item.id == 1),
		VIDEO_DEFINITIONS.find(item => item.id == 1),
		new TimeCode(0, 0, 0, 0),
		new TimeCode(0, 0, 30, 0)
	)
];
