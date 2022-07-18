let storyContent = [
    { name: "9gag", img: "assets/img/9gag.svg" },
    { name: "meowed", img: "assets/img/meowed.svg" },
    { name: "barked", img: "assets/img/barked.svg" },
    { name: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
    { name: "wawawicomics", img: "assets/img/wawawicomics.svg" },
    { name: "respondeai", img: "assets/img/respondeai.svg" },
    { name: "filomoderna", img: "assets/img/filomoderna.svg" },
    { name: "memeriagourmet", img: "assets/img/memeriagourmet.svg" }
]

let createStory = storyContent.map((story) => (
    <div class="story">
        <div class="imagem">
            <img src={story.img} />
        </div>
        <div class="usuario">
            {story.name}
        </div>
    </div>
));

export default function Stories() {
    return (
        <div class="stories">
            {createStory}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

