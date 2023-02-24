const { Meow } = require("../meow");
const { Words } = require("./misc");

//MESSAGE HANDLER
const Handler = async (client, message) => {
  //define message handler
  const cat = await Meow(message, client);

  //send message
  async function sendMessage(content, options, receiver) {
    return await client.sendMessage(receiver ?? message.from, content, options);
  }

  //reply message
  async function replyMessage(content, options, receiver) {
    return await message.reply(content, options);
  }

  if (cat.isValidMessage) {
    console.log("normal chat");
  } else {
    if (cat.isBotMentioned) {
      await replyMessage(Words.messageMeow);
    }
  }
};

exports.Handler = Handler;
