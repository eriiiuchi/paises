function carregaDicionario() {
    var paises_a_visitar = {
        pais01: {
            nome: "Austrália",
            descricao: "Austrália, oficialmente Comunidade da Austrália, é um país do hemisfério sul, localizado na Oceania, que compreende a menor área continental do mundo, a ilha da Tasmânia e várias ilhas adjacentes nos oceanos Índico e Pacífico. O continente-ilha, como a Austrália por vezes é chamada, é banhado pelo oceano Índico, ao sul, e a oeste pelo mar de Timor, mar de Arafura e Estreito de Torres, a norte, e pelo mar de Coral e mar da Tasmânia, a leste. Através destes mares, tem fronteira marítima com a Indonésia, Timor-Leste e Papua-Nova Guiné, a norte, e com o território francês da Nova Caledónia, a leste, e a Nova Zelândia a sudeste.",
            imagem: "https://i.postimg.cc/dLhdm3Z5/sydney-opera.jpg",
            continente: "Oceania",
            idioma: 'Inglês',
            principalAtracao: 'Ópera de Sydney',
        },

        pais02: {
            nome: "Egito",
            descricao: "O Egito, oficialmente República Árabe do Egito, é um país localizado entre o nordeste da África e o sudoeste da Ásia, através da Península do Sinai. É um país mediterrâneo limitado pela Faixa de Gaza e Israel a nordeste, o Golfo de Ácaba e o Mar Vermelho a leste, o Sudão ao sul e a Líbia a oeste. Do outro lado do Golfo de Ácaba fica a Jordânia, do outro lado do Mar Vermelho, a Arábia Saudita e, do outro lado do Mediterrâneo, a Grécia, a Turquia e o Chipre, embora nenhum deles tenha uma fronteira terrestre com o Egito.",
            imagem: "https://i.postimg.cc/gLYs2Wgf/gizasphinx.jpg",
            continente: "África/Ásia",
            idioma: 'Árabe',
            principalAtracao: 'Grande Esfinge de Gizé ',
        },

        pais03: {
            nome: "Grécia",
            descricao: "Grécia, oficialmente República Helênica e historicamente conhecida como Hélade, é um país localizado no sul da Europa. De acordo com dados do censo de 2011, a população grega é de cerca de 11 milhões de pessoas. Atenas é a capital e a maior cidade do país.",
            imagem: "https://i.postimg.cc/DJ7Lqc1G/parthenon.jpg",
            continente: "Europa",
            idioma: "Grego",
            principalAtracao: 'Partenon',
        },

        pais04: {
            nome: "Indonésia",
            descricao: "Indonésia, oficialmente República da Indonésia, é um país localizado entre o Sudeste Asiático e a Austrália, sendo o maior arquipélago do mundo, composto pelas Ilhas de Sonda, a metade ocidental da Nova Guiné e compreendendo no total 17 508 ilhas. Por ser um arquipélago, tem fronteiras terrestres com a parte oriental da Malásia (na ilha de Bornéu), Timor-Leste (na ilha do Timor) e Papua-Nova Guiné (na Nova Guiné); e marítimas com as Filipinas, Malásia, Singapura, Palau, Austrália e com o território indiano de Andamão e Nicobar. A localização entre dois continentes — Ásia e Oceania — faz da Indonésia uma nação transcontinental. O país é uma república, com poder legislativo e presidente eleitos por sufrágio universal, sendo sua capital a cidade de Jacarta, com uma população de cerca de 10 milhões de pessoas. É um dos membros fundadores da Associação de Nações do Sudeste Asiático (ASEAN) e membro do G20. A economia indonésia é a décima oitava maior economia do mundo e décima quinta maior em paridade do poder de compra.",
            imagem: "https://i.postimg.cc/BP6FzQYQ/Pura-Ulun-Danu-Bratan.jpg",
            continente: "Ásia",
            idioma: 'Indonésio',
            principalAtracao: 'Pura Ulun Danu Brata',
        },

        pais05: {
            nome: "Nova Zelândia",
            descricao: 'Nova Zelândia é um país insular, oficialmente pertencente à Oceania, no sudoeste do Oceano Pacífico, formado por duas massas de terra principais (comumente chamadas de Ilha do Norte e Ilha do Sul) e por numerosas ilhas menores, sendo as mais notáveis as ilhas Stewart e Chatham. O nome indígena na língua maori para a Nova Zelândia é Aotearoa, normalmente traduzido como "A Terra da Grande Nuvem Branca". É o principal constituinte do Reino da Nova Zelândia, com os demais constituintes sendo territórios ultramarinos, que incluíriam as Ilhas Cook e Niue (que se autogovernam, mas em associação livre); Tokelau; e a Dependência de Ross (reivindicação territorial da Nova Zelândia na Antártida). Recebeu este nome em homenagem a uma província dos Países Baixos chamada Zelândia, que era a terra natal de seus colonizadores.',
            imagem: "https://i.postimg.cc/Dm2Ps7cN/skytower.jpg",
            continente: "Oceania",
            idioma: 'Inglês',
            principalAtracao: 'Sky Tower',
        },

        pais06: {
            nome: "Turquia",
            descricao: "A Turquia , cujo nome oficial é República da Turquia, é um país euro-asiático que ocupa toda a península da Anatólia, no extremo ocidental da Ásia, e se estende pela Trácia Oriental (também conhecida como Rumélia), no sudeste da Europa. É um dos seis estados independentes cuja população é maioritariamente turca. Faz fronteira com oito países: a noroeste com a Bulgária, a oeste com a Grécia, a nordeste com a Geórgia, a Arménia e o enclave de Naquichevão do Azerbaijão, a leste com o Irão e a sudeste com o Iraque e a Síria. O mar Mediterrâneo e o Chipre situam-se a sul, o mar Egeu a sudoeste-oeste e o mar Negro a norte. O mar de Mármara, o Bósforo e o Dardanelos (que juntos formam os Estreitos Turcos) demarcam a fronteira entre a Trácia e a Anatólia e separam a Europa da Ásia.",
            imagem: "https://i.postimg.cc/ZCnP7j2F/mesquita-azul.jpg",
            continente: "Ásia/Europa",
            idioma: "Turco",
            principalAtracao: 'Mesquita Azul'
        }
    }
        ;
    for (var pais in paises_a_visitar) {
        content.innerHTML +=
            '<div class="card"> <img src="' +
            paises_a_visitar[pais].imagem + '" width="150 alt="">' +
            '<details> <summary>' + paises_a_visitar[pais].nome +
            '</summary> <p>Continente: ' + paises_a_visitar[pais].continente +
            '</p> <p>Idioma oficial: ' + paises_a_visitar[pais].idioma +
            '</p> <p>Principal atração turística: ' + paises_a_visitar[pais].principalAtracao +
            '</p> <p>' + paises_a_visitar[pais].descricao + '</p>'
            + '</details> </div>'
            ;
    }
}

carregaDicionario();
