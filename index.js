'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAEGSemgMWUBANjSwDL8e1FaDZCOl6j0DQ9WH7exkze3ZCB3Xl2Lgih2gfyLOHZBZAtoFifwuVzzOiU1ZBCdUKNg3paZCON5nr92jTZAfcciuION1B4dNMGexSgV5t5OOnDuoRYe716NnY254JnztJVrlZAAGDDIIQS6KLKJehchT400JGZAN1NCF',
  verifyToken: 'Aria',
  appSecret: '70f654a2efe272f120c8497e86ec357c'
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
	console.log('The user said "hello", "hi", "hey", or "hey there"')
	chat.say('Hello there!');
});

bot.start();