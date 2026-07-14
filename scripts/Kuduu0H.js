
const form = document.getElementById("googleShit");
const input = document.getElementById("campo-pesquisa");

const menus = document.querySelector(".main-menu");
const hqs = document.querySelector(".hq");

const atalhos = {
    "ai": "https://chatgpt.com",
    "anilist": "https://anilist.co",
    "arch": "https://archlinux.org",
    "canva": "https://canva.com",
    "chatgpt": "https://chatgpt.com",
    "claude": "https://claude.ai",
    "codepen": "https://codepen.io",
    "css": "https://css-tricks.com",
    "discord": "https://discord.com",
    "drive": "https://drive.google.com",
    "figma": "https://figma.com",
    "flathub": "https://flathub.org",
    "github": "https://github.com",
    "google": "https://google.com",
    "huggingface": "https://huggingface.co",
    "instagram": "https://instagram.com",
    "mdn": "https://developer.mozilla.org/pt-BR/",
    "newgrounds": "https://newgrounds.com",
    "notion": "https://notion.so",
    "ollama": "https://ollama.com",
    "openrouter": "https://openrouter.ai",
    "perplexity": "https://perplexity.ai",
    "pinterest": "https://pinterest.com",
    "reddit": "https://reddit.com",
    "stackoverflow": "https://stackoverflow.com",
    "steam": "https://store.steampowered.com",
    "twitch": "https://twitch.tv",
    "vercel": "https://vercel.com",
    "wiki": "https://wikipedia.org",
    "wikipedia": "https://wikipedia.org",
    "youtube": "https://youtube.com"
};

const comandos = {

    "help"() {

        alert(`
Kuduu0home

Comandos disponíveis:

>help

>show-menus
>hidden-menus

>clear

Você também pode digitar:

youtube
github
discord
steam
chatgpt
ollama
...
        `);

    },

    "show-menus"() {
        menus.classList.remove("oculto");
    },

    "hidden-menus"() {
        menus.classList.add("oculto");
    },

    "clear"() {
        input.value = "";
    }

};

form.addEventListener("submit", (e) => {

    let texto = input.value.trim().toLowerCase();

    if (texto === "") {
        e.preventDefault();
        return;
    }

    if (texto.startsWith(">")) {

        e.preventDefault();

        texto = texto.substring(1);

        if (comandos[texto]) {
            comandos[texto]();
        } else {
            alert(`Comando desconhecido:\n\n>${texto}`);
        }

        input.value = "";
        return;
    }

    if (atalhos[texto]) {

        e.preventDefault();

        window.open(atalhos[texto], "_blank");

        input.value = "";
        return;
    }
});