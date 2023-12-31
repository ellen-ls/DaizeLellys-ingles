import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card} from 'react-bootstrap'
import biblia from './Img/ingles-atraves-da-biblia.jpeg'
import viagens from './Img/viagens.png'
import negocios from './Img/negocios.png'
import musica from './Img/musica.jpeg'
import conversa from './Img/conversa.png'
import estrangeiro from './Img/estrangeiro.png'
import './Cursos.css'

const Cursos = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

      
    const cursos = [{
        id: 1,
        image: biblia,
        title: 'Inglês através da Bíblia',
        text: 'O curso de "Inglês através da Bíblia" tem o objetivo de preparar o aluno para comunicar-se de forma eficaz em inglês do Nível Iniciante A1 ao Avançado C1.O projeto traz uma abordagem cristã de ensino da Língua Inglesa que utiliza textos da Bíblia, informações bíblicas e a própria Bíblia em inglês, como veículo para o ensino.'
    },
    {
        id: 2,
        image: viagens,
        title: 'Inglês para Viagens',
        text: 'Prepare-se para suas viagens com nosso curso de inglês especializado (Travel Course). No primeiro módulo, abordamos situações essenciais, como aeroporto, avião e alfândega, para tornar o início de sua jornada tranquilo. No segundo módulo, focamos em aspectos práticos, desde reservas de hotel até refeições em restaurantes locais e exploração da cidade. Com nossos instrutores experientes, você desenvolverá as habilidades linguísticas necessárias para uma experiência de viagem mais suave. Junte-se a nós e ganhe confiança para explorar o mundo!"'
    },
    {
        id: 3,
        image: negocios,
        title: 'Inglês para Negócios',
        text: 'É uma modalidade específica e se concentra no aprendizado do vocabulário para o meio empresarial. Ou seja, é mais formal e é usado como uma ferramenta de linguagem para negócios, mais técnica e adequada ao contexto profissional. Além disso, o estudo do Business English parte de um conhecimento prévio do idioma, pelo menos a partir do intermediário.'
    },
    {
        id: 4,
        image: musica,
        title: 'Inglês com Música',
        text: 'Você já parou para pensar em como a música é poderosa? Ouvir música é algo que a maioria de nós gosta muito e faz com enorme frequência. Só o fato de ouvirmúsicas em inglês já te ajudará a ter mais contato com o idioma e você terá a oportunidade de aumentar (e muito!) o seu vocabulário. Mesmo sendo  iniciante, você aprenderá muito vocabulário e pronúncia. '
    },
    {
        id: 5,
        image: conversa,
        title: 'Conversation Class',
        text: ' Nossas aulas de conversação  diferem de uma aula convencional porque o foco, dessa vez, está em falar inglês. Nosso curso prepara você para conversar sobre qualquer assunto. Assim, você estará pronto para uma entrevista de emprego, uma reunião com parceiros estrangeiros ou mesmo um bate-papo com um novo amigo que não é brasileiro. À medida que você pratica inglês conversação, vai se sentindo mais seguro para essas situações.'
    },
    {
        id: 6,
        image: estrangeiro,
        title: 'Português para Estrangeiros',
        text: 'Nosso curso objetiva proporcionar a estrangeirosa oportunidade de aprender Português, como se fala no Brasil, de maneira simples e clara. Usamos situações do dia-a-dia, bem como músicas e séries, deixando o aprendizado dinâmico e funcional.'
    },
    ]

    return (
        <div className='cursos' id='curso'>
            <h1 className='cursos-h1'>Por que</h1><h1>meus cursos são um diferencial?</h1>
              <Carousel responsive={responsive} className='carrossel-cursos'>          
                    {cursos.map((curso) => (
                         <Card key={curso.id} className='card-cursos' style={{height:'47rem'}}>
                                <Card.Img variant="top" src={curso.image} style={{height:'18rem'}}/>
                            <Card.Body>
                                <Card.Title style={{textAlign:'center', borderBottom:'1px solid #d9d9d9'}}>{curso.title}</Card.Title>
                                       
                                        <Card.Text
                                            style={{
                                                fontSize: '14px',
                                                textAlign: 'left',
                                                paddingTop:'20px'
                                            }}>
                                          {curso.text}
                                         </Card.Text>
                            </Card.Body>
                           
                            </Card>  
                           
                    ))}
                    </Carousel> 

                    <button className='btn-cursos'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Adquira já!</a></button>
              
           </div>
    )
}
export default Cursos
