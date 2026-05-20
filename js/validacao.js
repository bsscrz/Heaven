// Validação estruturada de formulário com feedback visual (Critério 9)

document.addEventListener('DOMContentLoaded', () => {
    const formContato = document.querySelector('#form-contato');

    if (formContato) {
        formContato.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio real do formulário

            const nome =
                document.querySelector('#nome').value.trim();

            const email =
                document.querySelector('#email').value.trim();

            const mensagem =
                document.querySelector('#mensagem').value.trim();

            const feedback =
                document.querySelector('#form-feedback');

            // Validação simples de campos obrigatórios
            if (!nome || !email || !mensagem) {
                feedback.textContent =
                    "⚠️ Todos os campos são obrigatórios!";

                feedback.style.color = "#d32f2f";
                return;
            }

            // Exemplo de regex simples para validação de email
            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                feedback.textContent =
                    "⚠️ Insira um formato de e-mail válido.";

                feedback.style.color = "#d32f2f";
                return;
            }

            // Resposta de sucesso bem sucedida
            feedback.textContent =
                "✅ Obrigado, " +
                nome +
                "! Sua mensagem foi registrada.";

            feedback.style.color = "#2e7d32";
            formContato.reset();
        });
    }
});