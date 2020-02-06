// From https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/

var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var khiucounter = 0;
var khiusplitter = 5;
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // Just add any case commands if you want to..
			case 'chui': 
				bot.sendMessage({
					to: channelID,
					message: 'dm khiu!'
				});
			break;
			case 'stop': 
                bot.sendMessage({
                    to: channelID, 
                    message: 'im mommu' 
                });
                break; 
            case 'next':
                bot.sendMessage({
                    to: channelID,
                    message: 'next please. ez all'
                });
                break;
            // Just add any case commands if you want to..
            default:
                bot.sendMessage({
                    to: channelID,
                    message: cmd + ' cc'
                });
                break;
         }
    }

	if (message.substring(0, 1) == '-'){
		var args = message.substring(1).split(' ');
        var cmd = args[0];
        
        args = args.splice(1);
        switch(cmd) {
            // !ping
			case 'p':
				bot.sendMessage({
					to: channelID,
					message: 'play cc',
				});
				break;

			case 'skip':
				bot.sendMessage({
					to: channelID,
					message: 'next please',
				});
				break;

			case 'stop':
				bot.sendMessage({
					to: channelID,
					message: 'im mommu'
				});
				break;
            case 'next':
                bot.sendMessage({
                    to: channelID,
                    message: 'next please. ez all'
                });
	            break;
            // Just add any case commands if you want to..
            default:
                bot.sendMessage({
                    to: channelID, 
                    message: cmd + ' cc'
                });
                break;
         }
	}

	if(user == 'Burin'){
		if(khiucounter == khiusplitter){
			bot.sendMessage({
            	to: channelID,
            	message: "khiu hen!"
        	});
			khiusplitter = khiusplitter - 1;
			khiucounter = 0;
		} else {
			khiucounter = khiucounter + 1;
		}
		if(khiusplitter < 0){
			khiusplitter = 5;
		}		
	}
	//logger.info(use);	
});
