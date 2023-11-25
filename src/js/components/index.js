document.addEventListener('DOMContentLoaded', function () {
    const $html = document.querySelector('html');
    const $checkbox = document.querySelector('#checkbox');

    // Função para salvar a preferência do modo escuro no Armazenamento Local
    function saveDarkModePreference(value) {
        localStorage.setItem('darkMode', value);
    }

    // Verificar se há uma preferência armazenada no Armazenamento Local
    const darkModePreference = localStorage.getItem('darkMode');

    if (darkModePreference === 'true') {
        $html.classList.add('dark-mode');
        $checkbox.checked = true;
    }

    $checkbox.addEventListener('change', function () {
        if ($checkbox.checked) {
            // Se o usuário marcar a caixa de seleção, ativar o modo escuro e salvar a preferência
            $html.classList.add('dark-mode');
            saveDarkModePreference('true');
        } else {
            $html.classList.remove('dark-mode');
            saveDarkModePreference('false');
        }
    });
});