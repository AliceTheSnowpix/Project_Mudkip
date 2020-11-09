const request = require("request-promise-native").defaults({ encoding: null });
const imageCheck = require("image-type");

module.exports = (bot) => {
	String.prototype.toProperCase = function() {
		return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	};

	String.prototype.toFullWidth = function() {
		return this.replace(/[A-Za-z0-9]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) + 0xFEE0); });
	};

	Array.prototype.random = function() {
		return this[Math.floor(Math.random() * this.length)];
	};
	
	bot.wait = require("util").promisify(setTimeout);
	bot.getRandomHex = () => {
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	};

	bot.regexEscape = (string) => {
		return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	};

	bot.getImage = (message) => {
		return new Promise(async (resolve, reject) => {
			const messageList = message.channel.messages.sort(function(a, b) {
				return b.createdTimestamp - a.createdTimestamp;
			}).array();
			let attachmentFound = false;
			for (const messageCheck of messageList) {
				if (messageCheck.attachments.array().length !== 0) {
					const attachmentsList = messageCheck.attachments.array();
					const image = await request(attachmentsList[0].url);
					const imageType = imageCheck(image);
					await bot.wait(500);
					if (["jpg", "png", "webp"].includes(imageType.ext)) {
						attachmentFound = true;
						resolve(attachmentsList[0].url);
					}
				} else if (messageCheck.embeds.length !== 0) {
					if (messageCheck.embeds[0].thumbnail) {
						const embedsList = messageCheck.embeds;
						const image = await request(embedsList[0].thumbnail.url);
						const imageType = imageCheck(image);
						await bot.wait(500);
						if (["jpg", "png", "webp"].includes(imageType.ext)) {
							attachmentFound = true;
							resolve(embedsList[0].thumbnail.url);
						}
					} else if (messageCheck.embeds[0].image) {
						const embedsList = messageCheck.embeds;
						const image = await request(embedsList[0].image.url);
						const imageType = imageCheck(image);
						await bot.wait(500);
						if (["jpg", "png", "webp"].includes(imageType.ext)) {
							attachmentFound = true;
							resolve(embedsList[0].image.url);
						}
					}
				}
			}
			if (!attachmentFound) {
				reject("Attachment not found");
			}
		});
	}; 

	bot.resolveColor = (input) => {
		function rgbToHSL(red, green, blue) {
			let r = red / 255;
			let g = green / 255;
			let b = blue / 255;
		
			let max = Math.max(r, g, b), min = Math.min(r, g, b);
			let h, s, l = (max + min) / 2;
		
			if (max == min) {
				h = s = 0;
			} else {
				let d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch (max) {
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
			}
		
			h = Math.round(h * 360);
			s = Math.round(s * 100);
			l = Math.round(l * 100);
		
			return { hue: h, saturation: s, lightness: l };
		};
		if (input.startsWith('#')) input = input.substr(1);
		if (input.length === 3) input = input.split('').map(c => c + c).join('');

		let hex = input;
		let [red, green, blue] = [hex.substr(0, 2), hex.substr(2, 2), hex.substr(4, 2)]
			.map(value => parseInt(value, 16));
		let { hue, saturation, lightness } = rgbToHSL(red, green, blue);

		return { hex, red, green, blue, hue, saturation, lightness };
	};

	bot.clean = (text) => {
		if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else return text;
	};

	process.on("uncaughtException", (err) => {
		const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
		console.error(`Uncaught Exception: ${errorMsg}`);
		process.exit(1);
	});

	process.on("unhandledRejection", (err) => {
		console.error(`Unhandled rejection: ${err}`);
	});
};