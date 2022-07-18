import React from "react";


export default function Posts() {

    let postContent = [
        { 
            userImg: "assets/img/meowed.svg",
            userName: "meowed",
            postImg: "assets/img/gato-telefone.svg",
            userLike: "assets/img/respondeai.svg",
            nameLike: "respondeai",
            likes: "101.523"
        },
        {
            userImg: "assets/img/barked.svg",
            userName: "barked",
            postImg: "assets/img/dog.svg",
            userLike: "assets/img/adorable_animals.svg",
            nameLike: "adorable_animals",
            likes: "99.159"
    
        }
    ]
    
    const [redHeart, setRedHeart] = React.useState("heart-outline");

    let createPost = postContent.map ((post) => (
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={post.userImg} />
                {post.userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    
        <div class="conteudo">
            <img src={post.postImg} />
        </div>
    
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline" onClick={() => {
                        if (redHeart === "heart-outline"){
                            setRedHeart ("liked")
                        }else{
                            setRedHeart ("heart-outline")
                        }
                    }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
    
            <div class="curtidas">
                <img src={post.userLike} />
                <div class="texto">
                    Curtido por <strong>{post.nameLike}</strong> e <strong>outras {post.likes} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    ))

    return (
        <div class="posts">{createPost}</div>
            
    )
}

