import React from 'react';
import Iframe from 'react-iframe'
import Draggable from "react-draggable";


export default function Music() {

    return (
        <div>
            <Draggable>
                <div class="music">
                    <div class="musictitle">Música</div>
                    <Iframe
                        style="border-radius:12px"
                        src="https://open.spotify.com/embed/playlist/4m5T2GMrTnNN3qWq6tvkfc?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameborder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></Iframe>
                </div>
            </Draggable >

        </div>
    );
}