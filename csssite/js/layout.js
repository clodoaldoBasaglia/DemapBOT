/* exported mostrarMensagemErro, limparErros */

function inicializaValidator() {
    if ($.validator) {
        $.validator.addMethod("brDate",
            /*jshint unused:vars */
            function (value, element) {
                return Date.parseExact(value, "d/M/yyyy");
            }
        );
    }
    if ($.datepicker) {
        $.datepicker.setDefaults($.datepicker.regional["pt-BR"]);
    }
}

/**
 * Função que realiza o redirecionamento do menu de acesso rápido no Header do portal.
 */
function redirecionamentoMenuAcessoRapido() {
	var linkSelecionado = $("#linksAcessoRapido").val();

	// Apenas redireciona se não for um link "fake" (#)
	if (linkSelecionado !== "#") {
		// Se possui um "+" indicando para abrir em nova janela...
		if (linkSelecionado.indexOf("+") === 0) {
			window.open(linkSelecionado.substring(1)); 
		} else {
			window.location.href = linkSelecionado;
		}
	}
}

function injetaRedirecionamentoAcessoRapido() {
    $("#botaoAcessoRapido").click(function (e) {
        e.preventDefault();
        redirecionamentoMenuAcessoRapido();
    });
}

function limparErros() {
	$(".erros").html("");
}

function rolarTelaPara(selector) {
	$("html,body").animate({scrollTop: $(selector).offset().top},"fast");
}

function mostrarMensagemErro(mensagem) {
	$(".erros").html("<div class='erro'>" + mensagem + "</div>");
	rolarTelaPara(".erros");
}

function adicionaMascaras() {
    $("input[cnpj]").mask("00.000.000/0000-00",{placeholder: "__.___.___/____-__", reverse:true});
    $("input[cpf]").mask("000.000.000-00",{placeholder: "___.___.___-__"});
    $("input[dinheiro]").mask("000.000.000.000.000,00", {reverse: true});
    $("input[numerico]").mask("9999999999");
    $("input[percentual]").mask("##0,00", {reverse: true});
}

$(function(){
    adicionaMascaras();
    injetaRedirecionamentoAcessoRapido();
    inicializaValidator();
});