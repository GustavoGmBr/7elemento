import { useState } from "react";
import "../../style/Capitulos/Capitulo.css";
import "../../style/Capitulos/texto.css";
function Capitulo1() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="capitulo-wrapper">
        {/* Botão do menu sempre visível */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir/Fechar menu"
        // para garantir que fica acima do overlay
        >
          <span>☰</span> Navegação
        </button>

        {/* Overlay aparece somente se o menu está aberto */}
        {menuOpen && (
          <button
            className="overlay"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar overlay"
          />
        )}

        <nav
          className={`capitulo-sidebar${menuOpen ? " open" : ""}`}
        >
          <a className="nav-link" href="#cap-1" onClick={handleNavClick}>
            Capítulo 1 - O Sopro da Criação
          </a>
          <div>
            <a className="nav-link" href="#cap-1-1" onClick={handleNavClick}>
              Capítulo 1.1 - O Vazio E Os Moldadores
            </a>
            <a className="nav-link" href="#cap-1-2" onClick={handleNavClick}>
              Capítulo 1.2 - Os Sete Elementos E Os 10 Pilares Do Mundo
            </a>
            <a className="nav-link" href="#cap-1-3" onClick={handleNavClick}>
              Capítulo 1.3 - A Guerra Primordial
            </a>
            <a className="nav-link" href="#cap-1-4" onClick={handleNavClick}>
              Capítulo 1.4 - As Dez Entidades Guardiãs
            </a>
          </div>
        </nav>

        <main className="capitulo-main">
          <div className="texto">
            <div id="cap-1">
              <h2 className="text-center">Capitulo 1 - O Sopro da Criação</h2>
              <hr className="w-48 h-1 mx-auto my-3 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
            </div>
            <div id="cap-1-1">
              <h3 className="subtitulo text-center">Capitulo 1.1 - O Vazio E Os Moldadores</h3>
              <p className="narracao text-justify">
                No princípio, havia apenas o vazio — um abismo insondável, imerso em um silêncio imemorial, tão
                profundo que até mesmo a ausência de som parecia palpável. Nessa vastidão eterna, duas forças
                primordiais vagavam solitárias: Nazari, cujo espírito resplandecia com o brilho das estrelas
                nascentes, escondendo a melancolia de incontáveis eras de solidão, e Apolion, cuja essência
                rugia como o magma primordial que dorme no ventre do mundo, mas que também ansiava por libertar
                sua energia criativa. Durante eras incontáveis, eles pairavam na imensidão, separados pela
                ausência de propósito e unidos apenas pelo eco do nada, uma sinfonia silenciosa que ecoava em
                seus corações.
                Foi no murmúrio desse silêncio ancestral que a primeira semente foi plantada. Nazari, de olhar
                etéreo e voz sutil, finalmente rompeu a monotonia:
              </p>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(Os olhos brilhavam como estrelas em um céu límpido, sua
                  expressão refletia a calma etérea de quem carrega o peso do universo nos lábios,
                  mas também a esperança de um futuro desconhecido.)
                </span>
                <div className="dialogue-line">
                  — Apolion, não sente que este vazio nos chama a preenchê-lo?
                  <span className="tone"> Perguntou
                    suavemente, como se cada palavra fosse um sopro de eternidade e cada sílaba
                    carregando o peso de sua solidão e o anseio por conexão</span>.
                  <span className="after-action"> (Ela deu um passo à
                    frente, as mãos delicadas tocando o nada ao redor, como se moldasse o ar em algo
                    palpável, seus dedos traçando formas invisíveis no éter, como um escultor
                    imaginando sua obra-prima.)
                  </span>
                </div>
              </div>
              <div className="bloco-dialogo masculino ">
                <span className="character-name">Apolion: </span>
                <span className="expression">(O olhar severo de Apolion parecia emergir de uma eternidade
                  silenciosa; suas mãos, como montanhas adormecidas, repousavam imóveis,
                  enquanto seus olhos ardiam com a energia do magma ancestral, escondendo um
                  medo profundo do desconhecido)</span>
                <div className="dialogue-line">
                  — Criar, Nazari? Para quê? Não há olhos para contemplar, nem corações
                  para admirar, disse ele <span className="tone">Sua voz ecoando como trovões em um vale vazio,
                    cada
                    palavra carregada de ceticismo e a dúvida se sua força primordial seria
                    suficiente</span>.
                  <span className="after-action">(A luz das estrelas que emanava de Nazari parecia incitar um
                    tumulto em seu
                    âmago, e ele desviou o olhar como se tentasse resistir à urgência, temendo que a
                    criação trouxesse consigo a responsabilidade de dar sentido ao vazio.)
                  </span>
                </div>
              </div>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(Um leve sorriso surgiu em seus lábios, não de triunfo, mas de
                  compreensão; seus dedos gesticulavam suavemente, como quem convoca um
                  segredo esquecido, um plano maior que ela já podia vislumbrar.)</span>
                <div className="dialogue-line">
                  — Não precisa haver olhos ou corações, Apolion. Criamos porque podemos,
                  porque devemos. Pois o vazio existe apenas para nos impulsionar
                  <span className="tone">declarou, a
                    voz ganhando uma nota de inevitabilidade que cortava o silêncio como um vento
                    novo, trazendo consigo a promessa de mudança e a esperança de um novo
                    começo</span>.
                  <span className="after-action"> (Suas palavras pareciam iluminar os contornos sombrios do
                    moldador,
                    desafiando a hesitação que o prendia, como raios de sol rompendo as nuvens e
                    revelando a beleza oculta sob a escuridão.)
                  </span>
                </div>
              </div>
              <div className="bloco-dialogo masculino ">
                <span className="character-name">Apolion: </span>
                <span className="expression">(As mãos titânicas ergueram-se, tremendo com uma energia
                  primordial que ameaçava transbordar. Seu semblante endurecido deu lugar a um
                  brilho intenso nos olhos, como um vulcão à beira da erupção, o medo dando lugar à
                  excitação e à promessa de libertar sua essência criativa.)</span>
                <div className="dialogue-line">
                  — Então que seja, Nazari! <span className="tone"> exclamou, a voz vibrando com um vigor que
                    parecia moldar a realidade ao seu redor, cada palavra carregada de poder e
                    determinação</span>.
                  <div className="dialogue-line">
                    — Vamos criar, mas não por necessidade, e sim pelo puro poder de
                    fazer nascer, pela alegria de dar forma ao vazio e de deixar nossa marca na
                    eternidade.
                  </div>
                  <span className="after-action"> (Ele golpeou o vazio com os punhos de fogo, e o cosmos começou a
                    responder à sua vontade, ondulando e tremendo como se estivesse vivo. Matéria
                    sendo chamada à existência pela força de um titã, turbilhões de poeira cósmica
                    dançando em espirais, como se obedecessem a um chamado ancestral.)</span>
                </div>
              </div>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(O semblante de Nazari irradiava serenidade, mas seus olhos
                  refletiam uma alegria contida, como se visse a primeira luz em eras de escuridão,
                  uma satisfação profunda em testemunhar a transformação do vazio em algo belo e
                  significativo.)</span>
                <div className="dialogue-line">
                  — E eu darei vida a sua obra, para que o movimento e o tempo possam
                  dançar ao som da criação, <span className="tone"> murmurou, a voz melodiosa carregando a
                    promessa
                    do eterno, cada nota vibrando com a energia da vida e a esperança de um futuro
                    próspero</span>.
                  <span className="after-action"> (Ela ergueu os braços ao céu vazio e, com um gesto delicado, as
                    luzes
                    começaram a surgir, cada uma brilhando com um propósito único, como uma
                    sinfonia estelar, constelações nascendo em um balé cósmico, cada estrela uma
                    promessa de luz e conhecimento.)
                  </span>
                </div>
              </div>
              <p className="narracao text-justify">
                Nazari observava, com admiração quase reverente, as obras vigorosas de
                Apolion. Aproximando-se, ela tocou o mundo recém-nascido com o sopro de sua
                essência, e o movimento tomou forma. O vento começou a dançar entre os vales,
                levando consigo a melodia dos tempos vindouros, uma brisa suave que sussurrava
                segredos ancestrais e carregava as sementes da vida.

              </p>
              <p className="narracao text-justify">
                Então, ela ergueu os olhos ao firmamento vazio e, com dedos delicados,
                teceu as luzes do céu. Sóis e luas nasceram em harmonia, um balé de dourado e
                prateado que prometia equilíbrio. Cada astro era mais que luz: eram sinais de que a
                eternidade se dividia agora em dias e noites, ciclos e renascimentos, um ritmo
                cósmico que marcaria o compasso da existência.

              </p>
              <p className="narracao text-justify">
                Finalmente, Apolion e Nazari contemplaram sua criação. Juntos, não apenas
                preencheram o vazio, mas deram ao cosmos a sua primeira inspiração. O mundo
                pulsava, não mais em silêncio, mas em um ritmo vivo, um palco para histórias ainda
                por serem contadas, um universo vasto e misterioso, pronto para ser explorado e
                descoberto.
              </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div id="cap-1-2">
              <h3 className="text-center mb-3">Capitulo 1.2 - Os Sete Elementos E Os 10 Pilares Do Mundo</h3>
              <p className="narracao text-justify">
                Com a base do planeta moldada pela força primordial de Apolion, Nazari deu
                início à obra que selaria o destino daquele mundo nascente. Movida por sua
                incomparável capacidade de gerar vida, ela povoou os ambientes criados com uma
                miríade de seres vivos, cada um refletindo sua essência criativa. Animais de todas
                as formas e tamanhos emergiram do solo, desde pequenas criaturas que se moviam
                nas sombras das florestas até majestosos predadores que rugiam pelos vales.
                Flores deslumbrantes tingiram a terra com cores vibrantes, enquanto árvores
                imponentes ergueram-se como colunas vivas, sustentando os céus. As plantas,
                exuberantes e variadas, espalharam-se pelos campos e selvas, tecendo um
                mosaico de vida e beleza
              </p>
              <p className="narracao text-justify">
                Mas a criação não podia se limitar à vida que apenas habitava; precisava de
                energias que a inspirassem e a moldassem. Foi então que Nazari deu origem aos
                sete elementos fundamentais, energias ancestrais que impregnaram o mundo com
                propósito e transformação. Quatro elementos naturais foram os primeiros: o fogo,
                ardente e renovador, símbolo da transformação e do poder; a água, fluida e
                conectiva, tecendo a ligação entre todas as coisas; a terra, sólida e imutável,
                sustentáculo firme para tudo o que existisse; e o ar, livre e imprevisível, portador da
                essência da liberdade.

              </p>
              <p className="narracao text-justify">
                A seguir, vieram os dois elementos primordiais, fontes de equilíbrio cósmico:
                a luz, que trazia esperança e clareza, e a sombra, que guardava mistérios e
                segredos. Por último, para aqueles capazes de transcender e dominar os outros
                seis, Nazari revelou o mais enigmático de todos: o vazio, a essência pura da
                criação, reservada àqueles que ousassem desafiar os limites do mundo material.
              </p>
              <p className="narracao text-justify">
                Com os elementos em harmonia, Nazari voltou-se para sua obra-prima: as
                raças dominantes que habitariam o mundo e o tornariam vibrante com histórias e
                culturas. Dez povos surgiram, cada um refletindo um fragmento dos elementos e
                das próprias essências dos criadores.
              </p>
              <p className="narracao text-justify">
                Primeiro vieram os dragões, majestosos e imponentes, forjados no calor do fogo e na força das
                montanhas. Tornaram-se guardiões do saber ancestral, suas escamas reluzindo como joias sob o sol
                e a lua. Com habilidade, moldavam os próprios ossos do mundo, deixando sua marca nas entranhas
                da terra.
              </p>
              <p className="narracao text-justify">
                As fadas seguiram, etéreas e graciosas, seres nascidos da luz e da magia
                pura. Dançavam entre a claridade e a penumbra, portadoras do equilíbrio entre os
                mistérios e os milagres.
              </p>
              <p className="narracao text-justify">
                Dos véus da noite emergiram os vampiros, astutos e imortais, moldados pela
                sombra e pelo brilho prateado das luas. Ao lado deles, os lobisomens, ferozes e
                indomáveis, ligados profundamente à natureza primal e ao ciclo eterno da vida e da
                morte.
              </p>
              <p className="narracao text-justify">
                Nos corações das florestas densas nasceram os elfos, em perfeita comunhão
                com a natureza, suas cidades erguendo-se como sinfonias vivas entre os galhos
                das árvores. Nas águas cintilantes dos rios e oceanos, surgiram os marines,
                graciosos e misteriosos, seus corpos brilhando com a energia das correntes
                oceânicas e das profundezas insondáveis.
              </p>
              <p className="narracao text-justify">
                Nas vastas cavernas sob as montanhas habitaram os gigantes, imponentes e
                sábios, seus passos ressoando como trovões, enquanto protegiam os segredos
                mais antigos da terra. Ao lado deles, nas forjas ardentes e minas profundas
                estavam os anões, mestres inigualáveis da ferraria e das artes subterrâneas.
                Das selvas indomadas e das terras selvagens vieram os ferais, híbridos de homens
                e bestas, símbolos do equilíbrio entre a razão e o instinto, portadores da força bruta
                e da liberdade dos elementos. Por último, surgiram os humanos, frágeis em
                comparação com os outros, mas dotados de engenhosidade, ambição e uma
                adaptabilidade incomparável. Seus corações eram tanto sua maior fraqueza quanto
                sua maior força, e eles foram destinados a explorar cada canto do planeta,
                moldando-o com sua vontade indomável.
              </p>
              <p className="narracao text-justify">
                Ao concluir sua obra, Nazari recuou e observou o mundo pulsar com vida. As
                raças, os elementos e os ciclos estavam em movimento, cada um traçando seu
                caminho e deixando marcas indeléveis na criação. A harmonia fora selada, mas o
                palco estava preparado para os desafios que o futuro traria.
              </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div id="cap-1-3">
              <h3 className="text-center mb-3">Capitulo 1.3 - A Guerra Primordial</h3>
              <p className="narracao text-justify">
                Por milênios, Nazari e Apolion caminharam pelo mundo que haviam criado,
                celebrando sua grandiosidade e a vida que florescia. As raças prosperaram,
                erguendo culturas e lendas sob os astros que dançavam no firmamento. Mas,
                enquanto Nazari era adorada como a fonte da vida, Apolion era frequentemente
                ignorado. As criaturas, ao reverenciar a luz, esqueceram-se do papel daquele que
                moldará as montanhas e oceanos que sustentavam sua existência.

              </p>
              <p className="narracao text-justify">
                No início, Apolion tentou ignorar o desconforto. Ele observava em silêncio as
                raças que haviam surgido de sua colaboração com Nazari. Cada dia que passava,
                as canções dos mortais exaltavam a luz e a criação. As montanhas, os rios e as
                florestas — frutos de sua própria força e engenho — eram vistas como meros
                cenários, enquanto Nazari brilhava como a fonte de toda inspiração. Durante
                séculos, ele sufocou o ressentimento, mas o que era apenas um incômodo
                transformou-se, com o tempo, em uma ferida aberta. Seu orgulho, outrora
                inabalável, começou a ceder ao peso da mágoa.
              </p>
              <p className="narracao text-justify">
                Finalmente, incapaz de conter a dor que lhe corroía, ele se voltou para
                Nazari. O encontro aconteceu sob o céu estrelado, onde as constelações refletiam a
                glória compartilhada de suas criações. Sua voz, no entanto, não carregava a
                harmonia de outrora, mas um tom de amargura profunda.
              </p>
              <div className="bloco-dialogo masculino ">
                <span className="character-name">Apolion: </span>
                <span className="expression"> (Com a postura rígida, os olhos ardendo em um fogo contido)</span>
                <div className="dialogue-line">
                  — Por que sou apenas a sombra de sua glória? <span className="tone"> (Sua voz reverberava como
                    o eco de trovões distantes.)</span>.
                  <div className="dialogue-line">
                    Por que os mortais veneram a sua luz enquanto minhas
                    obras são esquecidas, relegadas a um pano de fundo inanimado?
                  </div>
                  <span className="after-action">(A mão de Apolion se fechou lentamente, como quem segura a
                    própria essência do crepúsculo. Ao seu redor, as sombras se adensaram, formando
                    arabescos etéreos que dançavam na fronteira da existência. Ele ergueu o olhar para além
                    do véu da luz, seus traços endurecidos por uma dor antiga, mas tingidos de esperança
                    desafiante. Em seu peito, a chama da indignação e do desejo de eternidade tremulava,
                    pronta para se transformar em algo novo, aguardando apenas o toque da criação para enfim
                    encontrar seu lugar no firmamento.)</span>
                </div>
              </div>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(Com o semblante calmo, mas os olhos brilhando com tristeza, Nazari
                  aproximou-se, a luz dourada ao seu redor suavizando as sombras que pairavam
                  sobre Apolion.)</span>
                <div className="dialogue-line">
                  — Não há sombra sem luz, Apolion. Juntos, somos o equilíbrio que sustenta
                  o mundo. Cada pedra, cada montanha que criaste carrega a força de tua essência.
                  Os mortais cantam a minha luz, mas é o teu alicerce que os sustenta
                  <span className="tone">, disse com uma compaixão suave</span>.
                  <span className="after-action">Estendendo lentamente a mão em direção a Apolion, e uma tênue luz
                    dourada se espalhou entre ambos, dissolvendo parte das trevas e lançando novos desenhos
                    de esperança sobre o terreno que pisavam</span>
                </div>
              </div>
              <p className="narracao text-justify">
                Apolion desviou o olhar, sua expressão fechada. As palavras de Nazari não
                encontraram eco em seu coração. Ele permaneceu imóvel, mas dentro de si, a
                mágoa germinava como uma videira sombria, sufocando tudo o que um dia fora
                nobre em sua essência. Ele começou a se afastar de Nazari, recusando seu
                consolo, e buscou refúgio nas profundezas da terra, onde a luz não podia
                alcançá-lo.
              </p>
              <p className="narracao text-justify">
                Ali, nas entranhas do mundo, Apolion passou a criar em segredo. Mas suas
                criações não eram mais impulsionadas pelo amor à beleza ou pela busca de
                equilíbrio. Eram reflexos de sua dor e amargura, seres moldados com a essência de
                sua fúria. Das sombras, surgiram os demônios, criaturas de destruição e caos,
                dotadas de uma vontade insaciável de consumir e aniquilar.
              </p>
              <p className="narracao text-justify">
                Quando Nazari descobriu o que Apolion havia feito, confrontou-o no sopé de
                uma montanha escurecida pela presença das hordas demoníacas. O lugar, que
                antes fora majestoso e sereno, agora tremia sob os passos das criaturas sombrias,
                enquanto o ar parecia denso com a energia maligna.
              </p>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(De pé, envolta em um manto de luz dourada, o olhar firme e pesaroso,
                  os traços delicados endurecidos pela gravidade do momento.)</span>
                <div className="dialogue-line">
                  — Apolion, você ameaça destruir tudo o que criamos juntos. Não deixe que a mágoa consuma
                  aquilo que somos. Há ainda um caminho de volta.
                  <span className="tone">Disse com serenidade firme.</span>.
                  <span className="after-action">(A luz ao redor de Nazari pulsou de leve, como se respondesse à
                    sua súplica, lançando reflexos dourados sobre as sombras crescentes.)</span>
                </div>
              </div>
              <div className="bloco-dialogo masculino ">
                <span className="character-name">Apolion: </span>
                <span className="expression">(Olhou Nazari nos olhos, as íris queimando como brasas em meio ao rosto
                  tenso e a respiração pesada, o corpo projetando uma sombra densa ao seu redor.)</span>
                <div className="dialogue-line">
                  — Este mundo não me merece! <span className="tone">Bradou com furor contido.</span>
                  <div className="dialogue-line">
                    — Eu o destruirei e moldarei outro,
                    onde minha glória será eterna!

                  </div>
                  <span className="after-action">(Erguendo os braços, apontou para as hordas sombrias que se
                    reuniam ao seu redor, e sua presença tornou o ar mais espesso, ameaçando engolir toda
                    esperança sob sua vontade.)</span>
                </div>
              </div>
              <p className="narracao text-justify">
                As palavras de Apolion ressoaram pela montanha, e o chão tremeu. O cume
                desmoronou em cascatas de rochas negras, enquanto os demônios urravam,
                espalhando uma escuridão que parecia engolir até mesmo a luz das estrelas.
                Apesar disso, Nazari permaneceu imóvel, um farol de serenidade em meio ao caos.
                Sua luz afastava as sombras ao seu redor, mas em seus olhos havia uma tristeza
                profunda.
              </p>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression"> (Os olhos marejados, a postura trêmula apesar da luz que a envolve;
                  sua voz, agora carregada de dor, cortou o tumulto como um raio de esperança.)</span>
                <div className="dialogue-line">
                  — Apolion, ouça-me! Há um lugar para ambos neste mundo. Nossos poderes não precisam se opor.
                  Juntos, somos equilíbrio, <span className="tone">suplicou com desespero sereno.</span>.
                  <span className="after-action"> (Uma única lágrima percorreu seu rosto antes de se dissipar na
                    luz, e por um instante, até as sombras pareceram hesitar ante sua esperança.)</span>
                </div>
              </div>
              <div className="bloco-dialogo masculino ">
                <span className="character-name">Apolion: </span>
                <span className="expression">(Os punhos cerrados, a fúria cegando o olhar e o corpo tomado por
                  tensão; ele enxergava em Nazari apenas o símbolo de sua humilhação.)</span>
                <div className="dialogue-line">
                  — Não há equilíbrio entre a luz e as trevas! <span className="tone">rugiu, tomado por pura
                    ira.</span>.
                  <span className="after-action">(Com um gesto abrupto, invocou as sombras ao seu redor,
                    concentrando-as em um turbilhão destrutivo que ameaçava consumir tudo que antes
                    compartilhavam.)</span>
                </div>
              </div>
              <p className="narracao text-justify">
                Apolion lançou o turbilhão de energia corrompida contra Nazari. Já não eram apenas sombras — era
                uma força deformada, pulsante, rejeitando tudo que era criação. Sua manifestação era um
                redemoinho caótico,
                repleto de ecos distorcidos das antigas potências que um dia moldaram o mundo ao lado de Nazari.
                Nazari ergueu as mãos, e uma barreira de luz dourada emergiu ao seu redor. O impacto foi
                ensurdecedor, como o colidir de dois mundos opostos: de um lado, a corrupção da criação; do
                outro, sua defesa mais pura.
              </p>
              <p className="narracao text-justify">
                A montanha rachou ao meio, e um abismo profundo surgiu entre os dois
                deuses, separando-os. No céu, a energia primordial explodia em brilhos dourados e
                negros, como constelações despedaçadas. De um lado, Nazari permanecia um farol
                de esperança, mas a dor era visível em seu semblante. Do outro, Apolion, cercado
                por suas criações corrompidas, encarava-a com desprezo e determinação.

              </p>
              <p className="narracao text-justify">
                Ali, no auge do confronto, o equilíbrio primordial foi quebrado. E o mundo,
                que antes pulsava em harmonia, mergulhou em um ciclo de conflito eterno,
                refletindo a batalha entre luz e corrupção que agora dividia seus criadores.

              </p>
              <p className="narracao text-justify">
                No início, Apolion tentou ignorar o desconforto. Ele observava em silêncio as
                raças que haviam surgido de sua colaboração com Nazari. Cada dia que passava,
                as canções dos mortais exaltavam a luz e a criação. As montanhas, os rios e as
                florestas — frutos de sua própria força e engenho — eram vistas como meros
                cenários, enquanto Nazari brilhava como a fonte de toda inspiração. Durante
                séculos, ele sufocou o ressentimento, mas o que era apenas um incômodo
                transformou-se, com o tempo, em uma ferida aberta. Seu orgulho, outrora
                inabalável, começou a ceder ao peso da mágoa.
              </p>
              <p className="narracao text-justify">
                Finalmente, incapaz de conter a dor que lhe corroía, ele se voltou para
                Nazari. O encontro aconteceu sob o céu estrelado, onde as constelações refletiam a
                glória compartilhada de suas criações. Sua voz, no entanto, não carregava a
                harmonia de outrora, mas um tom de amargura profunda
              </p>
              <p className="narracao text-justify">
                Ali, no auge do confronto, o equilíbrio primordial foi quebrado. E o mundo,
                que antes pulsava em harmonia, mergulhou em um ciclo de conflito eterno,
                refletindo a batalha entre luz e trevas que agora dividia seus criadores.

              </p>
              <p className="narracao text-justify">
                Por um breve instante, o silêncio caiu sobre o mundo. Nazari respirou fundo,
                sentindo o peso do que estava por vir. Ela olhou para Apolion, sua expressão uma
                mistura de tristeza e determinação.
              </p>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(Olhou para o horizonte com um misto de tristeza e determinação nos
                  olhos, enquanto a luz do crepúsculo iluminava seu rosto.)</span>
                <div className="dialogue-line">
                  — Se não podemos caminhar juntos, então que minha luz sirva para proteger este mundo de sua
                  escuridão. <span className="tone">Disse com firmeza, a voz carregada de um propósito
                    inabalável</span>.
                  <span className="after-action">(Após suas palavras, ergueu lentamente uma mão; dela emanou um
                    brilho suave que começou a envolver o ambiente como um escudo protetor. O vento ao seu
                    redor pareceu dançar em resposta, levando consigo a promessa de sua proteção.)</span>
                </div>
              </div>
              <p className="narracao text-justify">
                Enquanto as palavras dela ecoavam, a luz e as sombras continuavam a dançar no horizonte,
                marcando o início de uma nova era — uma era de conflito e resistência entre as forças que um dia
                haviam criado o mundo em harmonia.
              </p>
              <p className="narracao text-justify">
                A batalha entre os dois deuses não passou despercebida pelas raças que habitavam o mundo. Do
                cume das montanhas cristalinas aos recifes profundos, das florestas ancestrais às cidades
                submersas, criaturas de todas as formas e origens olhavam para o céu em terror. Relâmpagos de
                luz dourada e sombras profundas cortavam os céus, enquanto a própria terra tremia, como se
                temesse pelo destino de sua existência.
              </p>
              <p className="narracao text-justify">
                Os Dragões, sentinelas ancestrais das montanhas, rugiram em desafio à escuridão que avançava.
                Suas asas titânicas cortaram os céus, carregando consigo a fúria do fogo primordial. Nas
                florestas, as Fadas sentiram a magia da criação se corrompendo e, com pressa desesperada,
                começaram a tecer encantamentos protetores para preservar o equilíbrio. Os Vampiros, filhos da
                noite e senhores das sombras, hesitaram entre ceder ao chamado da escuridão de Apolion ou
                proteger o mundo que lhes dava sustento. Era um conflito entre sua natureza e a promessa de
                sobrevivência.
              </p>
              <p className="narracao text-justify">
                Foi Nazari quem deu o primeiro passo para resistir. Surgiu diante dos líderes das raças, não
                como uma deusa distante e intangível, mas como uma guia fervorosa, desesperada para salvar a
                criação. Sua presença irradiava luz, mas era sua voz que alcançava os corações.
              </p>
              <p className="narracao text-justify">
                — Vocês são a vida que moldamos juntos — disse ela, com urgência. — O mundo é sua casa, e agora
                está à beira da destruição. Apolion, em sua fúria, ameaça desfazer tudo o que criamos. Mas vocês
                têm a força para resistir. Lutem ao meu lado, e juntos traremos um novo amanhecer.
              </p>
              <p className="narracao text-justify">
                Mesmo os mais hesitantes não conseguiram ignorar a força e a verdade em suas palavras. Assim, um
                pacto foi selado. Pela primeira vez, as Dez Grandes Raças se uniram em um só propósito: defender
                o mundo da destruição iminente.
              </p>
              <p className="narracao text-justify">
                A guerra que se seguiu foi grandiosa e devastadora. Os céus tornaram-se campos de batalha onde
                Dragões enfrentaram demônios alados em confrontos titânicos. Seus rugidos ecoavam como trovões
                enquanto seus sopros flamejantes rasgavam a escuridão. Nas florestas, as Fadas conjuraram
                barreiras de luz e transformaram bosques inteiros em fortalezas vivas, com árvores que se
                erguiam como muralhas e rios que fluíam com energias encantadas.
              </p>
              <p className="narracao text-justify">
                Nas vastas planícies, os Gigantes e os Lobisomens lutaram lado a lado, uma aliança improvável
                mas formidável. As marteladas dos Gigantes esmagavam legiões de demônios, fazendo o chão
                estremecer, enquanto os Lobisomens, em sua fúria primal, atacavam como ventos devastadores,
                rasgando e destruindo tudo que se colocava em seu caminho. Sob a superfície, os Marines
                manipularam as correntes oceânicas e as marés para obliterar as forças sombrias que ousavam
                invadir seus domínios aquáticos.
              </p>
              <p className="narracao text-justify">
                Mas a guerra não foi vencida apenas pela força ou pela magia ancestral. Os Humanos, frágeis e de
                vida breve comparados às outras raças, provaram ser a chave do equilíbrio. Com sua
                engenhosidade, criaram armas poderosas e estratégias inovadoras que compensaram sua falta de
                poder bruto. Entre eles surgiram líderes e heróis cujas lendas ecoariam pelas eras, inspirando
                gerações futuras.
              </p>
              <p className="narracao text-justify">
                Cada raça trouxe para a batalha suas habilidades e talentos únicos, mas foi a união de suas
                forças e o propósito comum que deu esperança à criação. Enquanto as forças de Apolion avançavam
                como uma onda implacável de destruição, os defensores do mundo erguiam-se, firmes, recusando-se
                a ceder. Nos céus, nas terras e nos oceanos, a luta pela sobrevivência do mundo moldado por
                Nazari e Apolion havia começado — uma luta que decidiria não apenas o destino da criação, mas
                também o legado das raças que se uniram para preservá-la.
              </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div id="cap-1-4">
              <h3 className="text-center mb-3">Capitulo 1.4 - As Dez Entidades Guardiãs</h3>
              <p className="narracao text-justify">
                Apesar da união das raças e do esforço colossal contra Apolion, o mundo estava à beira do
                colapso. O chão tremia, os céus se rasgavam em relâmpagos dourados e negros, e o destino de tudo
                que havia sido criado parecia pender por um fio. Nazari, contemplando a vastidão devastada de
                sua criação, compreendeu que o sacrifício era inevitável. Ela precisaria usar toda a sua
                essência para selar Apolion e suas hordas em um plano além da existência. Contudo, antes de
                partir, ela sabia que algo precisava ser feito para proteger o equilíbrio do mundo após sua
                ausência.
              </p>
              <p className="narracao text-justify">
                Reunindo os líderes das Dez Grandes Raças em um vale devastado pela guerra, Nazari falou com a
                calma e a autoridade de quem sabia que o fim estava próximo. Sua luz iluminava os rostos
                cansados e desesperados dos que a ouviam, trazendo-lhes uma breve paz em meio ao caos.
              </p>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(Com postura serena, mas inflexível, Nazari ergueu a mão, irradiando
                  uma luz cálida que envolveu os líderes das Dez Grandes Raças. Apesar da aparência etérea,
                  seu semblante refletia toda a gravidade do momento. Os olhos de Nazari brilhavam com
                  determinação, e sua voz ecoou pelo vale silencioso, trazendo uma calma solene aos corações
                  aflitos.)</span>
                <div className="dialogue-line">
                  — Meu sacrifício será aquilo que selará Apolion e sua corrupção. <span className="tone">Afirmou
                    com serenidade, carregando o peso irreversível de sua escolha</span>.
                  <div className="dialogue-line">
                    — No entanto, quando eu me for, o equilíbrio do mundo ficará vulnerável. Para
                    protegê-lo, deixarei dez Guardiões, nascidos da última essência que resta em mim. Eles
                    serão eternos, incorruptíveis, encarnando os pilares fundamentais que sustentam o
                    universo. <span className="tone">Prosseguiu, a voz tornando-se resoluta, cada palavra soando
                      como uma promessa solene.</span>
                  </div>
                  <span className="after-action">(Ao encerrar sua declaração, um silêncio reverente recaiu sobre o
                    vale. A luz ao redor de Nazari intensificou-se por um breve instante, projetando sombras
                    longas nas ruínas ao redor. Os líderes, que até então se encontravam tomados pelo
                    desespero, sentiram uma centelha de esperança renascer e, em sinal de respeito e
                    gratidão, inclinaram a cabeça em reverência.)</span>
                </div>
              </div>
              <p className="narracao text-justify">
                Nazari então ergueu as mãos, e dela emanou uma luz brilhante que se fragmentou em dez raios,
                cada um tomando forma como um ser distinto, uma entidade radiante cuja presença parecia trazer
                ordem ao caos. O primeiro foi Aelion, a Guardiã da Vida, um ser de pura energia, cujos olhos
                brilhavam com a promessa de novos começos e ciclos eternos. Logo após veio Nyvaris, a Guardiã da
                Morte, austera e serena, com uma presença que transmitia não medo, mas a aceitação do fim como
                parte do grande ciclo.
              </p>
              <p className="narracao text-justify">
                Zeryon foi o terceiro, a encarnação da Guerra, forjado em aço e fogo, com uma espada que parecia
                pulsar com o poder de batalhas incontáveis. Ao lado dele surgiu Thaldris, a Guardiã do Caos,
                cujas formas mudavam constantemente, refletindo a ruptura que traz novas possibilidades. Elyria,
                a Guardiã da Esperança, veio a seguir, com asas brilhantes e uma luz que dissipava o desespero
                onde quer que estivesse.
              </p>
              <p className="narracao text-justify">
                Kaelith, o Guardião do Conhecimento, apareceu com um pergaminho infinito em mãos, seus olhos
                como estrelas refletindo a sabedoria do cosmos. Seraphina, a Guardiã do Amor, exalava uma aura
                de calor e compaixão, unindo os corações divididos. Logo após veio Valdrion, o Guardião da
                Justiça, com sua balança de cristal, símbolo do equilíbrio e da ordem.
              </p>
              <p className="narracao text-justify">
                Astrael, o Guardião do Destino, surgiu envolto em um manto de estrelas, guiando invisíveis fios
                de eventos que moldariam o futuro. Por fim, Chrona, a Guardiã do Tempo, apareceu com um relógio
                antigo em suas mãos, regulando o fluxo contínuo entre passado, presente e futuro.
              </p>
              <div className="bloco-dialogo feminino ">
                <span className="character-name">Nazari: </span>
                <span className="expression">(Seus olhos pousaram nos líderes das Dez Grandes Raças, cheios de
                  determinação e um amor profundo por sua criação. Apesar do cansaço que seu corpo
                  transparecia, sua voz ecoou com autoridade e uma força inabalável.)
                </span>
                <div className="dialogue-line">
                  — Os Guardiões protegerão o equilíbrio, mas cabe a vocês protegerem este mundo. <span
                    className="tone">Disse com firmeza, cada palavra carregada de uma responsabilidade
                    solene.</span>.
                  <div className="dialogue-line">
                    — Prometam que manterão a vigília sobre o selo de Apolion, e que nunca permitirão que
                    sua escuridão volte a corromper o que criamos, <span className="tone">sua voz alternava
                      entre súplica e liderança, inspirando fé e responsabilidade nos presentes.</span>
                  </div>
                  <span className="after-action">(Comovidos pela profundidade das palavras de Nazari, os líderes
                    das raças trocaram olhares de determinação e, em um gesto de respeito, ajoelharam-se
                    diante dele. Em seguida, um coro uníssono de promessas ecoou pelo vale devastado,
                    selando o compromisso eterno com o juramento sagrado que protegeria o futuro daquele
                    mundo.)</span>
                </div>
              </div>
              <p className="narracao text-justify">
                As raças prometeram, e Nazari, com um último olhar carregado de amor e tristeza, ergueu-se em
                meio à luz. Seu corpo começou a brilhar como nunca antes, tornando-se uma esfera de energia tão
                intensa que rivalizava com os próprios sóis. Com um gesto final, ela canalizou todo o seu poder
                para erguer uma rede dourada, que cercou Apolion e suas criações. A escuridão lutou e gritou em
                desafio, mas a luz era implacável
              </p>
              <p className="narracao text-justify">
                O grito de Apolion rasgou o tecido do cosmos, reverberando como um lamento de desespero e fúria
                enquanto ele era arrastado para um plano além da compreensão mortal, um abismo onde a luz e a
                escuridão se enfrentariam pela eternidade. A luz de Nazari, antes resplandecente como os
                próprios sóis, lentamente começou a se dissipar, deixando para trás um silêncio profundo, quase
                reverente. No centro daquele vazio recém-criado, os Dez Guardiões erguiam-se como sentinelas
                eternos, portadores de um juramento sagrado: proteger o equilíbrio do mundo a qualquer custo.
              </p>
              <p className="narracao text-justify">
                Embora o cenário ao redor ainda refletisse a devastação da guerra, o sacrifício de Nazari
                tornou-se o farol de esperança e redenção para todas as raças. Monumentos majestosos, esculpidos
                em pedra, cristal e ouro, foram erguidos em sua honra, cada um contando fragmentos de sua
                história — do amor pela criação ao último gesto de heroísmo. Seu nome não foi apenas gravado em
                pedra, mas em corações e canções, ecoando em lendas que atravessariam eras como uma chama que
                jamais se apagaria.
              </p>
              <p className="narracao text-justify">
                Sob os cuidados vigilantes dos Dez Guardiões, o mundo começou a florescer novamente. As terras
                devastadas ganharam nova vida, os rios voltaram a fluir, e as estrelas no firmamento pareciam
                brilhar com maior intensidade, como se honrassem a memória de Nazari. Mesmo diante dos desafios
                que ainda viriam, as raças encontraram forças no legado que ela deixara — uma promessa de que,
                enquanto sua luz fosse lembrada, a escuridão jamais prevaleceria.
              </p>
              <p className="narracao text-justify">
                E assim, a história de Nazari e seu sacrifício transformou-se em um juramento compartilhado
                entre todos os povos, uma lembrança perpétua de que, mesmo no mais profundo caos, a luz do
                sacrifício e da união sempre será capaz de iluminar o caminho.
              </p>
            </div>
          </div>
        </main >
      </div >
    </>
  );
}

export default Capitulo1;