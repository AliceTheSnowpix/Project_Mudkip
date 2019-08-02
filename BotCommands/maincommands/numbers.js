<<<<<<< HEAD
exports.run = async (bot, message, args) => {
=======
<<<<<<< HEAD
exports.run = async (bot, message, args) => {
=======
module.exports.run = async (bot, message, args) => {
>>>>>>> 779372288cd06adf21a119e075ee5e547d47f19d
>>>>>>> a8a758acb5f7a35ce41be20563fc51553fc40097
    if(args[0] == "help"){
        message.reply("Usage: ;number <lowest number> <highest number>");
        return;
    }

    let min = parseInt(args[0]);
    let max = parseInt(args[1]);

    if(min > max){
        let temp = max;
        max = min;
        min = temp;
    }

    var Result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(Result)){
        return message.reply("**Please enter a min and a max number**")
    }else{
        message.channel.send(Result);
    }
  
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
name: "number"
}
