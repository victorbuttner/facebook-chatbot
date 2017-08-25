module.exports = (robot) ->

	Conversation = require('hubot-conversation');
		
	switchBoard = new Conversation(robot);
	
	
	robot.hear /*/i, (res) ->
		res.reply("mensagem recebida")
		
		
	robot.hear /tem alguém ai?/i, (res) ->
		res.reply("Tem sim estamos ai")


	robot.hear /boa tarde*/i, (res) -> 
		res.reply("boa tarde! Simbora que falta pouco pra acabar o dia!")
	

	robot.hear /boa noite*/i, (res) -> 
		res.reply("boa noite! Tenha um ótimo fim de semana!")
		

	robot.hear /bora tomar */i, (res) -> 
		res.reply ('opa! Tem álcool? sim | nao')
		dialog = switchBoard.startDialog(res);	
		dialog.addChoice(/sim|aham|Sim|SIM|claro|muito|tem|ok|tem*|demais/,   (msg2) ->
			res.reply("Não posso, estou em horário de expediente! :upside_down: :wine_glass: :wine_glass:")
		)

		dialog.addChoice(/nao|não|Não|NAO|NÃO|pouca coisa|necas/,  (msg2) ->
			res.reply("bora! :coffee:")
		)
		
