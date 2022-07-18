import Usuario from "./Usuario";

let sugestions = [
    {
        title: "bad.vibes.memes",
        img:"assets/img/bad.vibes.memes.svg",
        text:"Segue você",
        follow:"Seguir"
    },
    {
        title: "chibirdart",
        img:"assets/img/chibirdart.svg",
        text:"Segue você",
        follow:"Seguir"
    },
    {
        title: "razoesparaacreditar",
        img:"assets/img/razoesparaacreditar.svg",
        text:"Segue você",
        follow:"Seguir"
    },
    {
        title: "adorable_animals",
        img:"assets/img/adorable_animals.svg",
        text:"Segue você",
        follow:"Seguir"
    },
    {
        title: "smallcutecats",
        img:"assets/img/smallcutecats.svg",
        text:"Segue você",
        follow:"Seguir"
    }
]

let createSidebar = sugestions.map ((sugestion) => (

    <div class="sugestao">
            <div class="usuario">
                <img src={sugestion.img} />
                <div class="texto">
                    <div class="nome">{sugestion.title}</div>
                    <div class="razao">{sugestion.text}</div>
                </div>
            </div>

            <div class="seguir">{sugestion.follow}</div>
        </div>
))

export default function Sidebar() {
    return (
        <div class="corpo">
            <div class="sidebar">
                <Usuario img="assets/img/catanacomics.svg" user="catanacomics" name="Catana" />

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    {createSidebar}

                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}

