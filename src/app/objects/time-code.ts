export class TimeCode {
	constructor (
		public hours: number,
		public minutes: number,
		public seconds: number,
		public frames: number
	) { }

	private formatNumber(number: number): string {
		return (number < 10) ? ("0" + number.toString()) : number.toString();
	}

	public add(timeCode: TimeCode, framesPerSecond: number): void {
		let totalFrames: number = (this.frames + timeCode.frames);
		this.frames = totalFrames % framesPerSecond;

		let secondsCarriedOver = Math.floor(totalFrames / framesPerSecond);
		let totalSeconds: number = (this.seconds + timeCode.seconds + secondsCarriedOver);
		this.seconds = totalSeconds % 60;

		let minutesCarriedOver = Math.floor(totalSeconds / 60);
		let totalMinutes: number = (this.minutes + timeCode.minutes + minutesCarriedOver);
		this.minutes = totalMinutes % 60;

		let hoursCarriedOver = Math.floor(totalMinutes / 60);
		let totalHours: number = (this.hours + timeCode.hours + hoursCarriedOver);
		this.hours = totalHours % 60;
	}

	public toString(): string {
		return this.formatNumber(this.hours) + ":" + this.formatNumber(this.minutes) + ":" + this.formatNumber(this.seconds) + ":" + this.formatNumber(this.frames);
	}
}
