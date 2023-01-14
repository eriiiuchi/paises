function loadDictionary() {
    const countries_to_visit = {
        country01: {
            countryName: "Austrália",
            description: "Austrália, oficialmente Comunidade da Austrália, é um país do hemisfério sul, localizado na Oceania, que compreende a menor área continental do mundo, a ilha da Tasmânia e várias ilhas adjacentes nos oceanos Índico e Pacífico. O continent-ilha, como a Austrália por vezes é chamada, é banhado pelo oceano Índico, ao sul, e a oeste pelo mar de Timor, mar de Arafura e Estreito de Torres, a norte, e pelo mar de Coral e mar da Tasmânia, a leste. Através destes mares, tem fronteira marítima com a Indonésia, Timor-Leste e Papua-Nova Guiné, a norte, e com o território francês da Nova Caledónia, a leste, e a Nova Zelândia a sudeste.",
            image: "https://i.postimg.cc/dLhdm3Z5/sydney-opera.jpg",
            continent: "Oceania",
            language: 'Inglês',
            mainAttraction: 'Ópera de Sydney',
            imageAlt: 'Foto da Ópera de Sydney, fundo com céu azul e nuvens brancas',
        },

        country02: {
            countryName: "Egito",
            description: "O Egito, oficialmente República Árabe do Egito, é um país localizado entre o nordeste da África e o sudoeste da Ásia, através da Península do Sinai. É um país mediterrâneo limitado pela Faixa de Gaza e Israel a nordeste, o Golfo de Ácaba e o Mar Vermelho a leste, o Sudão ao sul e a Líbia a oeste. Do outro lado do Golfo de Ácaba fica a Jordânia, do outro lado do Mar Vermelho, a Arábia Saudita e, do outro lado do Mediterrâneo, a Grécia, a Turquia e o Chipre, embora nenhum deles tenha uma fronteira terrestre com o Egito.",
            image: "https://i.postimg.cc/gLYs2Wgf/gizasphinx.jpg",
            continent: "África/Ásia",
            language: 'Árabe',
            mainAttraction: 'Grande Esfinge de Gizé ',
            imageAlt: 'A esfinge de Gizé, foto tirada pela lateral mostrando sua extensão e céu azul com poucas nuvens no fundo.',
        },

        country03: {
            countryName: "Grécia",
            description: "Grécia, oficialmente República Helênica e historicamente conhecida como Hélade, é um país localizado no sul da Europa. De acordo com dados do censo de 2011, a população grega é de cerca de 11 milhões de pessoas. Atenas é a capital e a maior cidade do país.",
            image: "https://i.postimg.cc/DJ7Lqc1G/parthenon.jpg",
            continent: "Europa",
            language: "Grego",
            mainAttraction: 'Partenon',
            imageAlt: 'Partenon tirado de longe, mostra toda a sua extensão, no fundo céu azul com poucas nuvens.',
        },

        country04: {
            countryName: "Indonésia",
            description: "Indonésia, oficialmente República da Indonésia, é um país localizado entre o Sudeste Asiático e a Austrália, sendo o maior arquipélago do mundo, composto pelas Ilhas de Sonda, a metade ocidental da Nova Guiné e compreendendo no total 17 508 ilhas. Por ser um arquipélago, tem fronteiras terrestres com a parte oriental da Malásia (na ilha de Bornéu), Timor-Leste (na ilha do Timor) e Papua-Nova Guiné (na Nova Guiné); e marítimas com as Filipinas, Malásia, Singapura, Palau, Austrália e com o território indiano de Andamão e Nicobar. A localização entre dois continents — Ásia e Oceania — faz da Indonésia uma nação transcontinental. O país é uma república, com poder legislativo e presidente eleitos por sufrágio universal, sendo sua capital a cidade de Jacarta, com uma população de cerca de 10 milhões de pessoas. É um dos membros fundadores da Associação de Nações do Sudeste Asiático (ASEAN) e membro do G20. A economia indonésia é a décima oitava maior economia do mundo e décima quinta maior em paridade do poder de compra.",
            image: "https://i.postimg.cc/BP6FzQYQ/Pura-Ulun-Danu-Bratan.jpg",
            continent: "Ásia",
            language: 'Indonésio',
            mainAttraction: 'Pura Ulun Danu Brata',
            imageAlt: 'Templo Pura Ulun Danu Brata em uma ilha com flores amarelas e vermelhas e outras plantas, no fundo céu com nuvens e na parte da frente, flores vermelhas.',
        },

        country05: {
            countryName: "Nova Zelândia",
            description: 'Nova Zelândia é um país insular, oficialmente pertencente à Oceania, no sudoeste do Oceano Pacífico, formado por duas massas de terra princicountry (comumente chamadas de Ilha do Norte e Ilha do Sul) e por numerosas ilhas menores, sendo as mais notáveis as ilhas Stewart e Chatham. O countryName indígena na língua maori para a Nova Zelândia é Aotearoa, normalmente traduzido como "A Terra da Grande Nuvem Branca". É o principal constituinte do Reino da Nova Zelândia, com os demais constituintes sendo territórios ultramarinos, que incluíriam as Ilhas Cook e Niue (que se autogovernam, mas em associação livre); Tokelau; e a Dependência de Ross (reivindicação territorial da Nova Zelândia na Antártida). Recebeu este countryName em homenagem a uma província dos Países Baixos chamada Zelândia, que era a terra natal de seus colonizadores.',
            image: "https://i.postimg.cc/Dm2Ps7cN/skytower.jpg",
            continent: "Oceania",
            language: 'Inglês',
            mainAttraction: 'Sky Tower',
            imageAlt: 'Foto tirada de lugar alto, mostra a parte de cima da Sky Tower, muitos prédios e o mar atrás do monumento.',
        },

        country06: {
            countryName: "Turquia",
            description: "A Turquia , cujo countryName oficial é República da Turquia, é um país euro-asiático que ocupa toda a península da Anatólia, no extremo ocidental da Ásia, e se estende pela Trácia Oriental (também conhecida como Rumélia), no sudeste da Europa. É um dos seis estados independentes cuja população é maioritariamente turca. Faz fronteira com oito países: a noroeste com a Bulgária, a oeste com a Grécia, a nordeste com a Geórgia, a Arménia e o enclave de Naquichevão do Azerbaijão, a leste com o Irão e a sudeste com o Iraque e a Síria. O mar Mediterrâneo e o Chipre situam-se a sul, o mar Egeu a sudoeste-oeste e o mar Negro a norte. O mar de Mármara, o Bósforo e o Dardanelos (que juntos formam os Estreitos Turcos) demarcam a fronteira entre a Trácia e a Anatólia e separam a Europa da Ásia.",
            image: "https://i.postimg.cc/ZCnP7j2F/mesquita-azul.jpg",
            continent: "Ásia/Europa",
            language: "Turco",
            mainAttraction: 'Mesquita Azul',
            imageAlt: 'Mesquita Azul, que é cinza, fundo com céu azul e nuvens brancas.',
        }
    }
        ;
    for (const country in countries_to_visit) {
        content.innerHTML += `
            <div class="card"> 
              <img src="${countries_to_visit[country].image}" width="150" alt="${countries_to_visit[country].imageAlt}">
              <details> 
                <summary> ${countries_to_visit[country].countryName}</summary> 
                <p>Continente: ${countries_to_visit[country].continent}</p> 
                <p>Idiomao ficial: ${countries_to_visit[country].language}</p> 
                <p>Principal atração turística: ${countries_to_visit[country].mainAttraction}</p> 
                <p>${countries_to_visit[country].description}</p >
                <p>${countries_to_visit[country].imageAlt}</p>
              </details > 
            </div >
        `;
    }
}
loadDictionary();
