const StatHandler = require("../helpers/stat-handler.js");

module.exports = {
	name: 'stats',
	description: 'Get a list of all global stats',
	execute(msg) {
        const angryReactions = StatHandler.getStat(StatHandler.BOT_ANGRY_REACTIONS);
        const tarotsRead = StatHandler.getStat(StatHandler.TAROTS_READ);
        const romanMentions = StatHandler.getStat(StatHandler.DIVOTKEY_REACTIONS);
        const cencorships = StatHandler.getStat(StatHandler.TIMES_CENCORED);
        const feetCensors = StatHandler.getStat(StatHandler.NON_FEET_RELATED_MESSAGES_DELETED);
        const yesnoQuestions = StatHandler.getStat(StatHandler.YESNO_QUESTIONS_ANSWERED);

        let result = `I have reacted angry ${angryReactions.toLocaleString("de-AT")} times.\n`;
        result += `I have read ${tarotsRead.toLocaleString("de-AT")} angry tarots.\n`;
        result += `Roman has been mentioned ${romanMentions.toLocaleString("de-AT")} times.\n`;
        result += `A total of ${cencorships.toLocaleString("de-AT")} messages have been cencored.\n`;
        result += `I have deleted ${feetCensors.toLocaleString("de-AT")} messages not related to feet.\n`;
        result += `I have answered ${yesnoQuestions.toLocaleString("de-AT")} yes/no questions.\n`;

        msg.channel.send(result);
	},
};