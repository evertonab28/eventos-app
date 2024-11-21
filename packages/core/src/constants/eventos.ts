import { Evento } from '../evento'
import { Id } from '../shared'

// a33v9grgptt-yv0zs6va7nq-ncnjmig9pc8
// 4ck943ebjav-p8ajaaw68h-30ad159xvmi
// o9ncn8c1ef-gw93g9b44ol-qdkahobck2g
// 3dgeatsypwx-dgpa3d6i4h-hhox2v9rcnr
// zeciiou5t3a-aqtnsgo24yp-0v8s0bq0in4a
// c2mixgjukie-aa6i4hhtunn-ygo1i2okjl
// 6xbpr890ip3-md3v4augkpg-tb89yhsjy4g
// ujpfsfkjjfq-0au4ndtyfdd9-bt1rj224mge
// pal6zlhiw1-5kiend7453g-xgyofa8r3q
// ydemlm2gd5-74mky8vbg56-t01epic1k1
// immjrng4c5a-tglf81ts3zj-18h3he0x734
// lxd4w0berm-c0ef7giltis-jnux5gj84di
// o5r418tujm-xlc9374uekn-ix6guoudud
// 7gfpgcbn74n-70ysvc9tjmo-vxyaarqxsar
// 
// 
// 
// 
// 
// 
// 

const eventos: Evento[] = [
    {
        id: "s7l67t5f9c-y17r099b7d-jiv2qdsnh5",
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Evento de Desenvolvimento Fullstack',
        data: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        descricao:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        imagem: 'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        imagemBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicoEsperado: 200,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Alice Silva',
                email: 'alice@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    {
        id: "pyzbzy9myc-2gmy72lf2is-cqtpguoz2us",
        alias: 'evento-js-avancado',
        senha: 'js2024',
        nome: 'Workshop Avançado de JavaScript',
        data: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        descricao: 'Um workshop avançado para programadores JavaScript.',
        imagem: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imagemBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        publicoEsperado: 100,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
        ],
    },
    {
        id: "cdc45j096s5-pdret8z29b-i3e3u2ox1a",
        alias: 'evento-dev-frontend',
        senha: 'front123',
        nome: 'Bootcamp de Desenvolvimento Frontend',
        data: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
        imagem: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imagemBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        publicoEsperado: 150,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "jndubskmp1-yqsmz7gxyra-c614bcu7pm6",
        alias: 'casamento-alberto-marina',
        senha: 'casamento2024',
        nome: 'Casamento do Alberto e Marina',
        data: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        descricao:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        imagem: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imagemBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        publicoEsperado: 150,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Carla Mendes',
                email: 'carla@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "br08fuqtlav-6alzgwte6y8-828nwohzk04",
        alias: 'aniversario-joao',
        senha: 'joao2024',
        nome: 'Aniversário do João - 30 Anos',
        data: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        descricao:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        imagem: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        imagemBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        publicoEsperado: 80,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Maria Souza',
                email: 'maria@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
            {
                id: Id.novo(),
                nome: 'José Almeida',
                email: 'jose@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "077s9io6ugo-kvbnkz4aw6-dbaejs3f22o",
        alias: 'inauguracao-loja-estrela',
        senha: 'estrela2024',
        nome: 'Inauguração da Loja Estrela',
        data: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        descricao:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        imagem: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imagemBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        publicoEsperado: 300,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 3,
            },
            {
                id: Id.novo(),
                nome: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "clm0d5no8rh-r5o4duisws-bxaauxqeh6",
        alias: 'reuniao-familia-oliveira',
        senha: 'familia2024',
        nome: 'Reunião da Família Oliveira',
        data: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        descricao: 'Reunião de fim de ano da família Oliveira.',
        imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imagemBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        publicoEsperado: 50,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 4,
            },
            {
                id: Id.novo(),
                nome: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
]

export default eventos
