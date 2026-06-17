const vetDadosConta = [
    Conta1[
    Elemento1 = [
        {
            nome: "Logan",
            tipo: personagem,
            classe: Mago,
            descricao: "Um jovem aprendiz de feiticeiro com desejo de dominar o mundo, vilanesco, mas só tem magia de cura",
            vida: 50,
            dano: 150,
            defesa: 50,
            sorte: 50,
            mana: 100,
        }
    ],
    Elemento2 = [
        {
            nome: "Escudo Rose Quartz",
            tipo: objeto,
            descrição: "Um escudo de cristal com o simbólo de um triangulo no centro, saindo como uma flor de rosa e tendo uma espiral embaixo de vinhas com espinhos, tão resistente quanto diamante",
            custoMana: 30,
            efeitos: dano, impacto, defesa,
            habilidades: arremesoEscudo, defesaMax, contraAtaque,
            dados: d1x15,
        }
    ],
    Elemento3 = [
        {
            nome: "Ilhas escaldadas",
            tipo: cenário,
            descrição: "Ilhas diversas feitas dos restos mortais de um titan, suas áreas são separadas pelas partes do corpo do defunto, a cidadela principal fica no coração do titan",
            efeito: chuvaÁcida, molhado,
            espaçamento: T64x64,
        }
    ]

],
    Conta2 = [
        Elemento1 = [
            {
                nome: "Ravik",
                tipo: personagem,
                classe: Guerreiro,
                descricao: "Um antigo soldado agora amaldiçoado por um dragão a viver eternamente em amargura",
                vida: 999,
                dano: 250,
                defesa: 0,
                sorte: -200,
                mana: 50,
            }
        ],
        Elemento2 = [
            {nome: "Excalibur",
            tipo: objeto,
            descrição:"Espada lendária que já uma vez estava presa dentro de uma pedra, sendo retirada apenas por alguém digno de ser rei de Hamelot",
            custoMana: 90,
            efeito: dano, sangramento, curtoAlcance,
            habilidades: corteFrontal, investida, estiloUmaEspada,
            dados: d1x20

            }
        ],
        Elemento3 = [{
nome: "Wireframe",
            tipo: cenário,
            descrição: "Um mundo de linhas em grid, sem colisões de paredes, mas com um chão se extende em uma área pequena até cair no void, o chão se movimenta",
            efeito: terremoto,
            espaçamento: T32x32,
        }]

    ],
    Conta3 = [
        Elemento1 = [
            {
                nome: "Elton João",
                tipo: personagem,
                classe: Druida,
                descricao: "Um jovém druida que busca conhecer o mundo com os próprios olhos",
                vida: 100,
                dano: 50,
                defesa: 50,
                sorte: 100,
                mana: 100,
            }
        ],
        Elemento2=[{
nome: "Sorvete",
            tipo: objeto,
            descrição:"Apesar da aparência, essa arma não derrete e nem mesmo é comestivel, vindo de um mundo onde stickmans lutam sem parar em áreas aleatórias com objetos aleatórios, parece muito eficaz na prática",
            custoMana: 40,
            efeito: congelamento, criaParede, impacto,
            habilidades: nevasca, flocoDeNeve, pilastra,
            dados: d2x10
        }],
        Elemento3=[{
nome: "Monte Olimpo",
            tipo: cenário,
            descrição: "Deuses da grécia antiga já pisaram aqui",
            efeito: trovao, molhado, elétrico,
            espaçamento: T120x120,
        }]
    ],
]
