
module.exports = function(robot) {



	var Conversation = require('hubot-conversation');
		
	var switchBoard = new Conversation(robot);


//social scripts

	robot.respond(/deu ruim*/i, res => {
		res.reply("que nada!")
	})

	robot.respond(/bora tomar */i, res => {
		res.reply ('opa! Tem álcool? sim | nao')
		var dialog = switchBoard.startDialog(res);	
		dialog.addChoice(/sim|aham|Sim|SIM|claro|muito|tem|ok|tem*|demais/,  function (msg2) {
			res.reply("Não posso, estou em horário de expediente! :upside_down: :wine_glass: :wine_glass:")
		})

		dialog.addChoice(/nao|não|Não|NAO|NÃO|pouca coisa|necas/,  function (msg2) {
			res.reply("bora! :coffee:")
		})
	})

	robot.respond(/te amo/i, res => {
		res.reply(":rolling_eyes:")
	})

	robot.respond(/eu te amo/i, res => {
		res.reply(":rolling_eyes:")
	})

	robot.respond(/te odeio/i, res => {
		res.reply("ui ui ui brabinho! :upside_down:")
	})

	robot.respond(/eu te odeio/i, res => {
		res.reply("não tenho culpa de nada, só trabalho aqui! :upside_down:")
	})

	robot.respond(/como você está*/i, res => {
		res.reply("tô bem! ")
	})

	robot.respond(/como tu tá*/i, res => {
		res.reply("tô bem! ")
	})

	robot.respond(/tu tá bem*/i, res => {
		res.reply("tô de boas! ")
	})

	robot.respond(/valeu*/i, res => {
		res.reply("é nóis truta! :man_with_gua_pi_mao:")
	})

	robot.respond(/obrigado*/i, res => {
		res.reply("capaz! Às ordens! Tamo junto! :thumbsup:")
	})

	robot.respond(/tá aí*/i, res => {
		res.reply("estamos aí! :raised_hands: :muscle: :thumbsup:")
	})

	robot.respond(/é bom esse guri*/i, res => {
		res.reply("pode crê :muscle:")
	})

	robot.respond(/ta ai*/i, res => {
		res.reply("presente! :raised_hands: :muscle: :thumbsup:")
	})

	robot.respond(/mim ajuda*/i, res => {
		res.reply("mim ser bot, mim ter coisas específicas só pra fazer! :upside_down:")
		res.reply("Digita um @z2.d2 help aí que te digo o que posso fazer!")
	})

	robot.respond(/me ajuda*/i, res => {
		res.reply("claro! Digita um @z2.d2 help aí que te digo o que posso fazer!")
	})

//	 robot.respond(/.*/i, res => {
//		res.reply("Faaala meu guri!")
//	})

	robot.respond(/bom dia/i, res => {
		res.reply ('bom dia! Dormiu bem? sim | nao')
		var dialog = switchBoard.startDialog(res);	
		dialog.addChoice(/sim|aham|Sim|SIM|de boas|foi massa|foi tri|ok|bem certinho/,  function (msg2) {
			res.reply("que bom! Tenha um ótimo dia de trabalho! ")
			res.reply("se precisar de mim, só me chamar! Ah, pra saber o que posso fazer, digita aí um @z2.d2 help")
		})

		dialog.addChoice(/nao|não|Não|NAO|NÃO|muito mal|foi horrível|necas/,  function (msg2) {
			res.reply("puxa vida! Melhoras aí!")
			res.reply("se precisar de mim, só me chamar! Ah, pra saber o que posso fazer, digita aí um @z2.d2 help")
		})
	})

	robot.respond(/boa tarde*/i, res => {
		res.reply("boa tarde! Simbora que falta pouco pra acabar o dia!")
		res.reply("se precisar de mim, só me chamar! Ah, pra saber o que posso fazer, digita aí um @z2.d2 help")
	})

	robot.respond(/boa noite*/i, res => {
		res.reply("boa noite! Tenha um ótimo fim de semana!")
	})	



}

