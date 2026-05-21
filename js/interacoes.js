// Simulação dinâmica do fluxo descentralizado com feedback visual (Critério 9)

function votarAcao(aprovado) {
    const feedbackCard = document.getElementById('validacao-feedback');
    const botoes = document.querySelector('.botoes-auditoria');

    // Oculta os botões após o voto, simulando envio único e evitando múltiplos cliques
    if (botoes) {
        botoes.style.display = 'none';
    }

    // Exibe feedback diferente conforme a decisão do auditor
    if (aprovado) {
        feedbackCard.innerHTML = `
            <p style="color: #2e7d32;">
                🎉 Voto de Aprovação enviado! Sua resposta foi salva de forma criptografada na rede. (+10 pontos de Auditor)
            </p>
        `;
    } else {
        feedbackCard.innerHTML = `
            <p style="color: #c62828;">
                🚫 Denúncia computada. O registro foi encaminhado para dupla checagem. Obrigado por proteger o ecossistema!
            </p>
        `;
    }
}