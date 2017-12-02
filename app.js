const Discord = require("discord.js");
const fs = require("fs");
const TOKEN = "Mzc1MDkwNDA3NDk2NzQ0OTYw.DNqx5w.Rv2ehDZseB3ZCUagPnvplfE6xAE"
const PREFIX = "."

var changelist = fs.readFileSync("./changelog.txt", {"encoding": "utf-8"});

var futureUpdates = fs.readFileSync("./updates.txt", {"encoding": "utf-8"});

var response = [
  "Yes.",
  "No.",
  "Try again later!",
];

var roasts = [
    "I bet your brain feels as good as new, seeing that you've never used it.",
    "You're the reason bleach actually exists.",
    "If Harry Potter had been made by Walmart, they would've casted you as Hermione Granger.",
    "You're the reason that the gene pool needs a life guard.",
    "Too bad there aren't cap codes on bleach.",
    "You so fat it took nationwide 2 years to get on your side",
    "DM Zombi#0706 roasts to add to the bot!",
];

var memeList = [
  "https://cdn.discordapp.com/attachments/375112923464335361/375438587358871563/509.png",
  "https://cdn.discordapp.com/attachments/366798030999126018/366799430617268227/1bthc5.png",
  "https://cdn.discordapp.com/attachments/366798030999126018/366798315276206080/Ri7s3T.png",
  "https://cdn.discordapp.com/attachments/366798030999126018/366798538388013056/if-only-they-could-know-the-glory-to-come_o_7166617.png",
  "https://cdn.discordapp.com/attachments/345367738367082498/345425761513111552/3MnzfO3.png",
  "https://cdn.discordapp.com/attachments/251456071489552384/375439822506033172/569262e5e68b81c97d9704890bff4194.png",
];

var app = new Discord.Client();

app.on("ready", function() {
    console.log("hello i'm online now");
    app.user.setGame(".cmds for a list of cmds!");
    app.user.setStatus("dnd")
});



app.on("message", function(message) {
    if (message.author.equals(app.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

      case "membercount":
      var r_embed = new Discord.RichEmbed()
        .setAuthor("Server Membercount:", message.author.avatarURL)
        .setColor(0xff0000)
        .addField("Members:", message.guild.memberCount)
        .setFooter("xBot", message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
      message.channel.sendEmbed(r_embed);
      break;

      case "zombi":
        message.reply("I see you know about Zombi.. Well I'll tell you a bit more about him! He's 100 years old and he's not a boy! I KNOW I SAID HE BUT HE DOESN'T MEAN BOY OK U LITTLE DUMBY!!! he can code in cake language, cake language is actually the best since it has cake in it, you can actually eat the language! that's all for now buthe's very cool my man zombi")
        break;
      case "ping":
        message.reply("pong")
        break;

      case "pong":
        message.channel.send("um, i think u got it the wrong way.. :/")
        break;

      case "cticket":
        message.reply("Please check your DMs!")
          message.author.send("This command is coming out soon! `.cticket` can hopefuly be used in the future.")
            break;

      case "roll":
        message.reply(Math.floor(Math.random() * 100));
        break;

      case "roastme":
        message.reply(roasts[Math.floor(Math.random() * roasts.length)]);
        break;

      case "memes":
        message.reply(memeList[Math.floor(Math.random() * memeList.length)]);
        break;

      case "8ball":
        if (args[1]) message.reply(response[Math.floor(Math.random() * response.length)]);
        else message.reply("Invalid use of command. Try `!8ball am I cool?`");
        break;

      case "cmds":
          var r_embed = new Discord.RichEmbed()
        .setAuthor("Commands for xBot:", message.author.avatarURL)
        .addField(".8ball", "example; '.8ball am I cool?'")
        .addField(".roll", "rolls a random number from 0-100")
        .addField(".ping", "you'll see :)")
        .addField(".pong", "you sure bout dat? :p")
        .addField(".cmds", "opens this thing up")
        .addField(".credits", "gives credits on bot developers")
        .addField(".serverinfo", "gives info on server")
        .addField(".roastme", "roasts user who says the cmd")
        .addField(".memes", "cmd coming soon")
        .addField(".membercount", "provides number of members in current guild")
        .addField(".money", "coming soon")
        .addField(".updates", "List of future updates coming to xBot")
        .addField(".suggest", "Coming soon")
        .addField(".kick", "example; `.kick @Zombi#0706` admin only")
        .addField(".say", "example; `.say hi`, owner only")
        .setColor(0xff0000)
        .setThumbnail(message.author.avatarURL)
        .setFooter("xBot", message.guild.iconURL)
        .setTimestamp()
          message.author.sendEmbed(r_embed);
          message.reply("Check your DMs for bot cmds!")
          break;

        case "say":
        if (!message.author.id == "251455288232640512") return message.reply("You don't have the permission to use this command!");
          var sayMessage = message.content.substring(4)
          message.delete().catch(O_o=>{});
          message.channel.send(sayMessage);
          break;

        case "current_bugs":
          var embed = new Discord.RichEmbed()
            .setAuthor(`Current bugs found and being fixed:`, message.author.avatarURL)
            .setColor("0x00FFFF")
            .addField('Bug #1 found in `.serverinfo` command.', "Using `.serverinfo` in the joined on it shows the bot joindate instead of user")
            .addField('Bug#1 found in `.memes` command.', "Need to remove it from showing link, we'll make the image an attachment soon.")
            .addField("Report other bugs to developers", "Current Developer; Zombi#0706")
            .setFooter("xBot", message.guild.iconURL)
            .setImage(message.guild.iconURL)
            .setTimestamp()
            message.channel.sendEmbed(embed);
            break;

        case "serverinfo":
          var embed = new Discord.RichEmbed()
             .setAuthor(`Info for this server:`, message.author.avatarURL)
             .setColor("0x00FFFF")
             .addField("Server Name:", `${message.guild.name}`, true)
             .addField("Member Count:", message.guild.memberCount, true)
             .addField("Owned By:", message.guild.owner, true)
             .addField("Region:", message.guild.region, true)
             .addField("Verification Type:", message.guild.verificationlevel, true)
             .addField("Default Channel:", message.guild.defaultChannel, true)
             .addField("Creation Date:", message.guild.createdAt)
             .addField("Joined On:", message.guild.joinedAt)
             .setFooter("xBot", message.guild.iconURL)
             .setImage(message.guild.iconURL)
             .setTimestamp()
             message.channel.sendEmbed(embed);
            break;

          case "changelog":
            message.reply(changelist)
            break;

        case "credits":
            var r_embed = new Discord.RichEmbed()
          .setAuthor("Credits for xBot development/help:", message.author.avatarURL)
          .addField("Zombi#0706", "Created and coded the bot. Main developer.")
          .addField("TheSuperEmeraldYT#3799", "Helped test the bot, thank you! :)")
          .addField("ᎧᎷᎧᎧᏕ#7521", "Helped give me the memes for `.memes`, thank you! :)")
          .setColor(0xff0000)
          .setImage(message.guild.iconURL)
          .setFooter("xBot", message.guild.iconURL)
          .setTimestamp()
          message.channel.sendEmbed(r_embed);
          break;

          //kick cmdd v
        case "kick":
	  if (!message.author.id == "251455288232640512") return message.reply("You don't have the permission to use this command!");
          let member = message.mentions.members.first();
          member.kick();
          message.reply(`Successfuly kicked member.`)
          break;


        case "money":
          message.channel.send("Money stuff is coming soon (etc, lottery, gamble, buy,sell,steal etc)")
          break;

          case "updates":
            message.reply(futureUpdates)
          break;
          //end of cmds

        case "testingcmd":
        if (!message.member.roles.some(r=>["Youtubers"].includes(r.name)) ) return message.reply("You don't have the permission to use this command!");
        break;

        case "saad":
        message.channel.send("saad iscool");
        break;
      }
  });
  app.login(TOKEN);
