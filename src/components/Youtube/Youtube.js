import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Youtube.css'


const API = "AIzaSyDazRmTfpmJNYnZ5i7HSUG5bPY7HGqolpM"
const channelId = "UC6VykeQ2wrgRf-1dWfnf4gw"

let fetchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&channelId=${channelId}&maxResults=3&order=date&key=${API}`

export const Youtube = () => {

    const [videos, setVideos] = useState([])

     useEffect(() => {
       fetch(fetchUrl).then((response) => response.json()).then((resJson) => {
            const result = resJson.items.map(doc => ({
                ...doc,
                videoLink: "https://www.youtube.com/embed/" + doc.id.videoId
            }))
            setVideos(result)
        })
    }, [])

    console.log(videos)
    return (
        <div className='youtube-sessao'>
            <h1>Últimas do Meu Canal</h1>
            <Container >
                <Row>


                    {videos.map((item) => {
                        return (

                            <Col className='youtube-videos'>
                                <iframe width="320" height="215"
                                    src={item.videoLink}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                                </iframe>
                                <span>{item.snippet.title}</span>
                            </Col>
                        )
                    })}


                </Row>
            </Container>
            <div className='div-button'>
                <a href='https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa' target='blank'><button className='button-youtube'>Acesse meu canal para mais vídeos</button></a>
            </div>

        </div>
    )
}
