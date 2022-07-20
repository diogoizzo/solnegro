import Image from "next/image";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Inscricao from "../components/Inscricao";
import Trabalho from "../components/Trabalho";
import Reviews from "../components/Reviews";
import Preco from "../components/Preco";
import Perguntas from "../components/Perguntas";
import customLoader from "../components/customLoader";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section
                    className={" frame flex flex-col items-center w-full my-10"}
                >
                    <h2
                        className={
                            "font-montserrat text-2xl text-brand-red tracking-wide text-center text-shadow md:text-4xl xl:text-5xl xl:leading-[70px]"
                        }
                    >
                        O CURSO QUE IRÁ <br className={"hidden md:block"} />{" "}
                        DEVASTAR SUAS CRENÇAS
                    </h2>
                    <p
                        className={
                            "font-roboto text-center font-semibold text-xl xl:text-4xl mt-2 mb-10"
                        }
                    >
                        Serão 5 encontros online e ao vivo em setembro.
                    </p>
                    {/*todo falar com o gago sobre o ajuste de dropshadow para o mobile - ficou muito forte*/}
                    {/*todo falar com o gago sobre a alteração de título, pois ficou igual a faixa da imagem*/}
                    <div className={"w-full flex flex-col xl:flex-row"}>
                        <span className={"xl:w-1/2 xl:order-2 text-center"}>
                            <iframe
                                width="330"
                                height="200"
                                src="https://www.youtube-nocookie.com/embed/Rjkc8lYa8Y8?autoplay=1&mute=1&enablejsapi=1&origin=https://solnegro.vercel.app"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen="allowFullScreen"
                                className={"md:hidden"}
                            ></iframe>
                            <iframe
                                width="560"
                                height="390"
                                src="https://www.youtube-nocookie.com/embed/Rjkc8lYa8Y8?autoplay=1&mute=1&enablejsapi=1&origin=https://solnegro.vercel.app"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen="allowFullScreen"
                                className={"hidden md:block mx-auto"}
                            ></iframe>
                        </span>

                        <div
                            className={
                                "mt-6 text-justify font-roboto md:text-xl xl:w-1/2 xl:mt-0 xl:mr-12 "
                            }
                        >
                            <p>
                                Conheça os poderes ocultos que atuaram na
                                Alemanha de Hitler e saiba como essas ideias
                                seguem vivas nos dias atuais, através de grupos
                                místicos e esotéricos. Crianças cristais,
                                mensagens canalizadas, contrato extraterrestre,
                                energia vril, são apenas algumas dessas ideias.
                                A presença do símbolo Sol Negro na guerra da
                                Ucrânia, mostrou aquilo que o autor vem dizendo
                                há anos. Estamos revivendo o passado e aqueles
                                que escreveram a história ocultaram parte da
                                verdade.
                            </p>
                            <p>
                                Após este curso, você jamais voltará a ser
                                enganado por esses grupos que com suas
                                ideologias controlam e manipulam a maior parte
                                das pessoas no mundo.
                            </p>
                        </div>
                    </div>
                </section>
                <Trabalho />
                <section className={"bg-black"}>
                    <div className="frame flex flex-col items-center py-10 2xl:py-16">
                        <h2
                            className={
                                "text-white font-montserrat text-center text-2xl md:text-4xl"
                            }
                        >
                            O QUE VOCÊ VAI TER NO CURSO SOL NEGRO
                        </h2>
                        <div
                            className={
                                "flex flex-col space-y-6 flex-wrap justify-center md:flex-row xl:w-full xl:mt-6 2xl:my-12"
                            }
                        >
                            <div className={"mt-6 md:w-1/3 xl:w-1/5"}>
                                <div
                                    className={"w-20 mx-auto md:w-24 2xl:w-28 "}
                                >
                                    <Image
                                        loader={customLoader}
                                        src={"/icons/olho.svg"}
                                        alt={"ícone de arquivos do curso"}
                                        width={141}
                                        height={141}
                                        layout={"intrinsic"}
                                    />
                                </div>
                                <p
                                    className={
                                        "text-xl mt-2 text-white font-roboto text-center md:text-2xl"
                                    }
                                >
                                    4 Encontros
                                    <br />
                                    ao vivo
                                </p>
                            </div>
                            <div className={"md:w-1/3 xl:w-1/5"}>
                                <div
                                    className={"w-20 mx-auto md:w-24 2xl:w-28 "}
                                >
                                    <Image
                                        loader={customLoader}
                                        src={"/icons/play.svg"}
                                        alt={"ícone de arquivos do curso"}
                                        width={141}
                                        height={141}
                                        layout={"intrinsic"}
                                    />
                                </div>
                                <p
                                    className={
                                        "text-xl mt-2 text-white text-center font-roboto md:text-2xl"
                                    }
                                >
                                    +20h de
                                    <br />
                                    Conteúdo
                                </p>
                            </div>
                            <div className={"md:w-1/3 xl:w-1/5"}>
                                <div
                                    className={"w-20 mx-auto md:w-24 2xl:w-28 "}
                                >
                                    <Image
                                        loader={customLoader}
                                        src={"/icons/foto.svg"}
                                        alt={"ícone de arquivos do curso"}
                                        width={141}
                                        height={141}
                                        layout={"intrinsic"}
                                    />
                                </div>
                                <p
                                    className={
                                        "text-xl mt-2 text-white text-center font-roboto md:text-2xl"
                                    }
                                >
                                    +1000
                                    <br />
                                    Imagens
                                </p>
                            </div>
                            <div className={"md:w-1/3 xl:w-1/5"}>
                                <div
                                    className={"w-20 mx-auto md:w-24 2xl:w-28 "}
                                >
                                    <Image
                                        loader={customLoader}
                                        src={"/icons/play.svg"}
                                        alt={"ícone de arquivos do curso"}
                                        width={141}
                                        height={141}
                                        layout={"intrinsic"}
                                    />
                                </div>
                                <p
                                    className={
                                        "text-xl mt-2 text-white text-center font-roboto md:text-2xl"
                                    }
                                >
                                    Gravação
                                    <br />
                                    das aulas
                                </p>
                            </div>
                            <div className={"md:w-1/3 xl:w-1/5"}>
                                <div
                                    className={"w-20 mx-auto md:w-24 2xl:w-28 "}
                                >
                                    <Image
                                        loader={customLoader}
                                        src={"/icons/arquivo.svg"}
                                        alt={"ícone de arquivos do curso"}
                                        width={141}
                                        height={141}
                                        layout={"intrinsic"}
                                    />
                                </div>
                                <p
                                    className={
                                        "text-xl mt-2 text-white text-center font-roboto md:text-2xl"
                                    }
                                >
                                    Diploma <br />
                                    digital
                                </p>
                            </div>
                        </div>
                        <Inscricao />
                    </div>
                </section>
                <section className={"bg-gray-300 py-10 w-full "}>
                    <div className="frame">
                        <h2
                            className={
                                "font-montserrat text-2xl text-center text-shadow-red mb-6 md:text-4xl xl:text-5xl"
                            }
                        >
                            DE ONDE VEM ESSAS TEORIAS
                        </h2>
                        <div className="grid  grid-cols-1 pb-6 grid-rows-2 md:grid-rows-3 md:grid-rows-6 md:pb-12 xl:pb-5 xl:grid-cols-3 xl:grid-rows-2 xl:gap-10 ">
                            <div className={"xl:col-span-2 relative"}>
                                <p
                                    className={
                                        "text-justify font-roboto md:text-xl"
                                    }
                                >
                                    Conheça os poderes ocultos que atuaram na
                                    Alemanha de Hitler e saiba como essas ideias
                                    seguem vivas nos dias atuais, através de
                                    grupos místicos e esotéricos. Crianças
                                    cristais, mensagens canalizadas, contrato
                                    extraterrestre, energia vril, são apenas
                                    algumas dessas ideias.
                                </p>
                                <p
                                    className={
                                        "text-justify font-roboto md:text-xl"
                                    }
                                >
                                    A presença do símbolo Sol Negro na guerra da
                                    Ucrânia, mostrou aquilo que o autor vem
                                    dizendo há anos. Estamos revivendo o passado
                                    e aqueles que escreveram a história
                                    ocultaram parte da verdade. Após este curso,
                                    você jamais voltará a ser enganado por esses
                                    grupos que com suas ideologias controlam e
                                    manipulam a maior parte das pessoas no
                                    mundo.
                                </p>
                            </div>

                            <Slider
                                orientation={"vertical"}
                                className={
                                    "mt-6 md:row-span-3 md:-mt-52  md:row-start-4 xl:row-span-3 xl:h-full  "
                                }
                                slideId={2}
                                slides={[
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                ]}
                            />
                            <Slider
                                orientation={"horizontal "}
                                className={
                                    "hidden mt-12 md:block md:row-span-2 xl:h-full  xl:col-span-2 max-h-[400px] md:h-full"
                                }
                                slideId={1}
                                slides={[
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                ]}
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        className={
                            "bg-black w-full py-10 sm:-mt-48 md:-mt-52 xl:mt-0"
                        }
                    >
                        <div
                            className={
                                "grid frame grid-cols-1 xl:grid-cols-3 xl:items-center"
                            }
                        >
                            <div
                                className={
                                    "mx-auto w-36 md:w-44 xl:w-96 xl:order-2 xl:mx-0 xl:justify-self-end"
                                }
                            >
                                <Image
                                    loader={customLoader}
                                    src={"/images/mandala.png"}
                                    alt={"mandala do sol negro"}
                                    width={459}
                                    height={459}
                                    layout={"intrinsic"}
                                />
                            </div>
                            <div
                                className={
                                    "flex flex-col w-full mt-6 xl:order-1 xl:col-span-2"
                                }
                            >
                                <h2
                                    className={
                                        "font-montserrat text-2xl text-center  text-brand-red text-shadow-red-claro mb-6 md:text-4xl xl:text-5xl xl:leading-[70px] xl:text-left"
                                    }
                                >
                                    COMO O SOL NEGRO{" "}
                                    <br className={"hidden xl:inline-block"} />É
                                    ESTRUTURADO
                                </h2>
                                <p
                                    className={
                                        "text-white font-roboto text-center xl:text-left text-lg md:text-2xl"
                                    }
                                >
                                    Serão 5 encontros ao vivo com mais de 20
                                    horas de{" "}
                                    <br className={"hidden md:block"} />{" "}
                                    conteúdo com base em pesquisas históricas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            "grid grid-cols-1 w-full xl:grid-cols-2 relative"
                        }
                    >
                        <div
                            className={
                                "w-full my-10 flex flex-col justify-center items-start px-[6%] xl:px-[15%] xl:order-2"
                            }
                        >
                            <h3
                                className={
                                    "text-2xl text-left font-montserrat text-brand-red text-shadow md:text-4xl "
                                }
                            >
                                ENCONTRO 01
                            </h3>
                            <h4
                                className={
                                    "text-2xl text-left font-montserrat md:text-3xl"
                                }
                            >
                                MISTICISMO CRESCENTE
                            </h4>
                            <p
                                className={
                                    "text-left mb-6 font-roboto mt-2 font-semibold text-lg md:text-2xl"
                                }
                            >
                                Carga horária de 05 horas com intervalo
                                <br />
                                03 de Setembro das 14h às 19h
                            </p>
                            <ol
                                className={
                                    "list-[upper-roman] list-inside font-roboto md:text-xl"
                                }
                            >
                                <li>O misticismo no século XIX. </li>
                                <li>O movimento Nova Era e sua ideologia.</li>
                                <li>
                                    O caos na Alemanha e o messias esperado.
                                </li>
                                <li>
                                    O jovem Hitler e o interesse pelo ocultismo.
                                </li>
                                <li>
                                    Sociedades ocultistas na Alemanha
                                    Hitlerista.
                                </li>
                                <li>A Sociedade Thule e o Partido Nazista. </li>
                                <li>Maria Orsic e as canalizadoras alemãs.</li>
                                <li>A energia Vril.</li>
                                <li>
                                    O símbolo místico da suástica e do Sol
                                    Negro.
                                </li>
                                <li>
                                    Demais influencias da ideologia nazista.
                                </li>
                            </ol>
                        </div>
                        <div
                            className={
                                "xl:order-1 relative min-h-[350px] md:min-h-[600px]"
                            }
                        >
                            <Image
                                loader={customLoader}
                                src={"/images/mulheres.png"}
                                alt={"imagem de duas mulheres misteriosas"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                            />
                        </div>
                        <div
                            className={
                                "w-full flex my-10 flex-col justify-center items-start px-[6%] xl:px-[15%] xl:order-3"
                            }
                        >
                            <h3
                                className={
                                    "text-2xl text-left font-montserrat text-brand-red text-shadow md:text-4xl"
                                }
                            >
                                ENCONTRO 02
                            </h3>
                            <h4
                                className={
                                    "text-2xl text-left font-montserrat md:text-3xl"
                                }
                            >
                                UMA NOVA ORDEM MUNDIAL
                            </h4>
                            <p
                                className={
                                    "text-left mb-6 font-roboto mt-2 font-semibold text-lg md:text-2xl"
                                }
                            >
                                Carga horária de 05 horas com intervalo
                                <br />
                                10 de Setembro das 14h às 19h
                            </p>
                            <ol
                                className={
                                    "list-[upper-roman] list-inside font-roboto md:text-xl"
                                }
                            >
                                <li>O Reich de mil anos.</li>
                                <li>O movimento pangermânico.</li>
                                <li>
                                    O paganismo alemão e a mitologia nórdica.
                                </li>
                                <li>Uma nova ciência e uma nova religião.</li>
                                <li>A ideologia ariana.</li>
                                <li>
                                    Os cavaleiros da SS, a guarda espiritual do
                                    Terceiro Reich.
                                </li>
                                <li>Ahnenerbe e as ciências ocultistas.</li>
                                <li>
                                    Projeto Lebensborn e a fábrica das “crianças
                                    cristais”.
                                </li>
                                <li>
                                    A lança do destino, o santo graal e outros
                                    objetos de poder.
                                </li>
                                <li>
                                    Expedições ao Tibet em busca de Shambhala e
                                    Agartha.
                                </li>
                            </ol>
                        </div>
                        <div
                            className={
                                "xl:order-4 relative min-h-[350px] md:min-h-[600px]"
                            }
                        >
                            <Image
                                loader={customLoader}
                                src={"/images/hall.jpg"}
                                alt={"imagem de um hall de entrada"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                            />
                        </div>
                        <div
                            className={
                                "w-full my-10 flex flex-col justify-center items-start px-[6%] xl:px-[15%] xl:order-6"
                            }
                        >
                            <h3
                                className={
                                    "text-2xl text-left font-montserrat text-brand-red text-shadow md:text-4xl"
                                }
                            >
                                ENCONTRO 03 (PARTE 1)
                            </h3>
                            <h4
                                className={
                                    "text-2xl text-left font-montserrat md:text-3xl"
                                }
                            >
                                O QUARTO REICH NAS AMÉRICAS
                            </h4>
                            <p
                                className={
                                    "text-left mb-6 font-roboto mt-2 font-semibold text-lg md:text-2xl"
                                }
                            >
                                Carga horária de 04 horas com intervalo
                                <br />
                                17 de Setembro das 14h às 18h
                            </p>
                            <ol
                                className={
                                    "list-[upper-roman] list-inside font-roboto md:text-xl"
                                }
                            >
                                <li>O Tribunal de Nuremberg.</li>
                                <li>O Quarto Reich.</li>
                                <li>A Rota dos Ratos.</li>
                                <li>A fuga para América do Sul.</li>
                                <li>Igreja Católica auxilia fugitivos.</li>
                                <li>
                                    Nações simpatizantes do Nacional Socialismo.
                                </li>
                                <li>Empresas, jornais e demais apoiadores.</li>
                                <li>Operação Paper Clip.</li>
                                <li>
                                    Nazistas na Nasa e no projeto espacial
                                    soviético.
                                </li>
                            </ol>
                        </div>
                        <div
                            className={
                                "xl:order-5 relative min-h-[350px] md:min-h-[600px]"
                            }
                        >
                            <Image
                                loader={customLoader}
                                src={"/images/igreja.jpg"}
                                alt={"imagem de vários bispos em uma igreja"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                            />
                        </div>
                        <div
                            className={
                                "w-full my-10 flex flex-col justify-center items-start px-[6%] xl:px-[15%] xl:order-7"
                            }
                        >
                            <h3
                                className={
                                    "text-2xl text-left font-montserrat text-brand-red text-shadow md:text-4xl"
                                }
                            >
                                ENCONTRO 03 (PARTE 2)
                            </h3>
                            {/*todo falar com o gago sobre a foto que falta, capa do livro*/}
                            <h4
                                className={
                                    "text-2xl text-left font-montserrat md:text-3xl"
                                }
                            >
                                O QUARTO REICH NAS AMÉRICAS
                            </h4>
                            <p
                                className={
                                    "text-left font-roboto mt-2 font-semibold text-lg md:text-2xl"
                                }
                            >
                                Carga horária de 03 horas com intervalo
                                <br />
                                17 de Setembro das 20h às 23h
                            </p>
                            <p
                                className={
                                    "font-roboto text-justify mb-2 md:text-xl p-dif"
                                }
                            >
                                Entrevista especial de duas horas com o
                                jornalista Marcelo Netto, um dos autores da obra
                                “O Homem que Enterrou Hitler”. Serão abordados:
                            </p>
                            {/*todo falar com o gago sobre a diferença de padrão, já que todas as listas são em romano e essa é com asterístico*/}
                            <ol
                                className={
                                    "list-[upper-roman] list-inside font-roboto md:text-xl"
                                }
                            >
                                <li>
                                    Sargento do exército brasileiro participa do
                                    enterro de Hitler no Paraguai.
                                </li>
                                <li>
                                    A manipulação no cenário da morte em Berlin.
                                </li>
                                <li>
                                    A pesquisa da análise dentária de Hitler
                                    tentando encerrar o assunto.
                                </li>
                                <li>
                                    A estada de Hitler no Brasil, Argentina e
                                    Paraguai.
                                </li>
                                <li>
                                    Como a Alemanha queria instaurar no interior
                                    do estado do Paraná uma coloca nazista
                                    modelo.
                                </li>
                                <li>
                                    O segurança pessoal de Hitler que resistiu
                                    em São Paulo e está prestes a ser
                                    denunciado.
                                </li>
                                <li>
                                    As forças poderosas que atuam para ocultar a
                                    verdade
                                </li>
                            </ol>
                        </div>
                        <div
                            className={
                                "xl:order-8 relative min-h-[350px] md:min-h-[600px]"
                            }
                        >
                            {/*todo falar com o gago sobre a imagem dessa parte, já que não esta no mesmo formato das demais e utiliza um fundo vermelho*/}
                            <Image
                                loader={customLoader}
                                src={"/images/matou.jpeg"}
                                alt={"imagem de duas mulheres misteriosas"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                            />
                        </div>
                        <div
                            className={
                                "w-full my-10 flex flex-col justify-center items-start px-[6%] xl:px-[15%] xl:order-10"
                            }
                        >
                            <h3
                                className={
                                    "text-2xl text-left font-montserrat text-brand-red text-shadow md:text-4xl"
                                }
                            >
                                ENCONTRO 04
                            </h3>
                            <h4
                                className={
                                    "text-2xl text-left font-montserrat md:text-3xl"
                                }
                            >
                                A HISTÓRIA SE REPETE
                            </h4>
                            <p
                                className={
                                    "text-left mb-6 font-roboto mt-2 font-semibold text-lg md:text-2xl"
                                }
                            >
                                Carga horária de 05 horas com intervalo <br />
                                24 de Setembro das 14h às 19h
                            </p>
                            <ol
                                className={
                                    "list-[upper-roman] list-inside font-roboto md:text-xl"
                                }
                            >
                                <li>Os discos voadores alemães.</li>
                                <li>
                                    A expedição do Almirante Byrd para a
                                    Antártida.
                                </li>
                                <li>As sociedades oculistas na atualidade.</li>
                                <li>O legado sombrio da ideologia New Age.</li>
                                <li>
                                    A ordem de Lúcifer e seus adeptos
                                    inconscientes.
                                </li>
                                <li>
                                    Extraterrestres, mensagens canalizadas,
                                    crianças índigos.
                                </li>
                                <li>
                                    O Sol Negro nos dias atuais e na guerra da
                                    Ucrânia.
                                </li>
                                <li>
                                    Os cenários ideológicos que manipulam
                                    milhões.
                                </li>
                                <li>
                                    A difícil busca pela verdade em meio ao
                                    engano.
                                </li>
                            </ol>
                        </div>
                        <div
                            className={
                                "xl:order-9 relative min-h-[350px] md:min-h-[600px]"
                            }
                        >
                            <Image
                                loader={customLoader}
                                src={"/images/monumento.jpg"}
                                alt={"imagem de um monumento"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                            />
                        </div>
                        <div
                            className={
                                "w-full my-10 flex flex-col justify-center items-start px-[6%] xl:px-[15%] xl:order-11"
                            }
                        >
                            <h3
                                className={
                                    "text-2xl text-left font-montserrat text-brand-red text-shadow md:text-4xl"
                                }
                            >
                                ENCONTRO 05
                            </h3>
                            <h4
                                className={
                                    "text-2xl text-left font-montserrat md:text-3xl"
                                }
                            >
                                PARA ESCLARECER DÚVIDAS
                            </h4>
                            <p
                                className={
                                    "text-left mb-6 font-roboto mt-2 font-semibold text-lg md:text-2xl"
                                }
                            >
                                Carga horária de 03 horas
                                <br />
                                29 de Setembro das 21h às 00h
                            </p>
                            <ol
                                className={
                                    "list-[upper-roman] list-inside font-roboto md:text-xl"
                                }
                            >
                                <li>
                                    Após o término do Curso, nos reuniremos numa
                                    quinta-feira, com o objetivo de esclarecer
                                    dúvidas sobre os temas abordados. Ao longo
                                    do curso, você pode ir anotando todas as
                                    suas dúvidas, e trazê-las para
                                    esclarecimento nesta aula especial.
                                </li>
                            </ol>
                        </div>
                        <div
                            className={
                                "xl:order-12 relative min-h-[350px] md:min-h-[600px]"
                            }
                        >
                            <Image
                                loader={customLoader}
                                src={"/images/discoParcial.jpg"}
                                alt={"imagem de um disco voador pela metade"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className={"w-full"}>
                        <div className={"bg-brand-red-dark py-10"}>
                            <div className={"frame"}>
                                <h2
                                    className={
                                        "font-montserrat text-center text-2xl text-white mb-3 md:text-4xl"
                                    }
                                >
                                    O CURSO QUE IRÁ DEVASTAR SUAS CRENÇAS
                                </h2>
                                <p
                                    className={
                                        "text-white text-center text-lg font-roboto md:text-2xl"
                                    }
                                >
                                    Entenda o obscurantismo presente na
                                    sociedade alemã da Segunda Guerra.
                                </p>
                            </div>
                        </div>
                        <Preco />
                        <Trabalho />
                    </div>
                </section>
                <section>
                    <div className="frame py-10 xl:py-14 relative">
                        <h2
                            className={
                                "font-montserrat text-2xl text-center mb-6 md:text-4xl xl:text-5xl xl:mb-10"
                            }
                        >
                            SOBRE ALCIONE GIACOMITTI
                        </h2>
                        <div
                            className={
                                "text-center xl:float-left xl:max-w-[50%] xl:mr-6 "
                            }
                        >
                            <Image
                                loader={customLoader}
                                src={"/images/autor.jpg"}
                                alt={"imagem de duas mulheres misteriosas"}
                                height={763}
                                width={770}
                                layout={"intrinsic"}
                            />
                        </div>
                        <div
                            className={
                                "text-center font-roboto text-justify mt-6 space-y-2 md:text-xl"
                            }
                        >
                            <p>
                                O tema das sociedades esotéricas e ocultistas e
                                como elas impulsionam o surgimento de Novas
                                Ordens Mundiais que atuam nos bastidores do
                                mundo, tem sido objeto de estudo do autor há
                                muitos anos. Seu último trabalho, Shambhala,
                                adentrou profundamente nas raízes de parte
                                dessas ordens e como elas influenciaram dos
                                bastidores, grande parte dos conhecimentos
                                místicos presentes em nossos dias.
                            </p>
                            <p>
                                O autor dedicou sua vida a estudos de conexão
                                entre Ciência e Espiritualidade e pesquisas
                                pelos mais importantes impérios arqueológicos da
                                América do Sul. Também organizou alguns dos mais
                                importantes eventos ocorridos no Brasil nestas
                                áreas.
                            </p>
                            <p>
                                Dentre os eventos, destacam-se o “Fórum Mundial
                                Espírito e Ciência”, que contou com a presença
                                de mais de quarenta conferencistas de diferentes
                                países, o Fórum Internacional “Vida Após a
                                Morte” e a “Conferência Global 21 minutos”, que
                                reuniu sessenta conferencistas de dez países,
                                entre as maiores lideranças mundiais destes
                                temas.
                            </p>
                            <p>
                                Há vinte anos o autor organiza viagens de
                                conhecimento e espiritualidade a lugares como
                                Machu Picchu, Lago Titicaca, Linhas de Nazca,
                                Ilha de Páscoa, Pirâmides de Caral, entre
                                outros.
                            </p>
                            <p>
                                Durante quatro anos, levou ao ar o programa de
                                rádio UFO: Arquivo Confidencial e o programa
                                Grandes Enigmas do Universo. Também produziu
                                reportagens especiais para diversos veículos de
                                televisão sobre estes temas.
                            </p>
                            <p>
                                Diversos estudiosos e autores já participaram de
                                suas viagens de estudos pela América do Sul,
                                como o físico quântico americano Amit Goswami, o
                                lendário autor suíço Erich von Daniken, o editor
                                da revista ufo Ademar Gevaerd, entre muitos
                                outros.
                            </p>
                            <p>
                                Alcione Giacomitti é autor de “Os Pilares da
                                Sabedoria de Um Novo Mundo”, “Noites Mágicas em
                                Machu Picchu” e “A Sabedoria dos Antigos Xamãs”.
                            </p>
                            <p>
                                Mantém um Canal no YouTube que leva o seu nome,
                                onde semanalmente aborda conhecimentos elevados
                                da ciência, espiritualidade e antigas tradições.
                            </p>
                            <p>
                                O primeiro evento do autor, “Enigmas do Planeta
                                Terra”, foi organizado quando ele tinha apenas
                                16 anos e contou com a presença de grandes
                                estudiosos e pesquisadores da época. Em 2022, o
                                autor foi homenageado pela cidade de Curitiba,
                                recebendo o “Prêmio Cultura e Divulgação”, pela
                                dedicação e divulgação do conhecimento.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={"bg-gray-300 pt-10 pb-4"}>
                    <div className="max-w-[1800px] xl:mx-auto p-low">
                        <h2
                            className={
                                "font-montserrat frame text-2xl text-center mb-10 md:text-4xl xl:text-5xl "
                            }
                        >
                            O QUE OS ALUNOS FALAM DOS CURSOS DO ALCIONE
                            GIACOMITTI
                        </h2>
                        <div className="grid grid-cols-1 w-full lg:grid-cols-2 xl:grid-cols-5">
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/g4HOWUqgRhQ"
                                }
                                id={"g4HOWUqgRhQ"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/7BLrOVy1Hxk"
                                }
                                id={"7BLrOVy1Hxk"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/G2bDImmgK6k"
                                }
                                id={"G2bDImmgK6k"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/nrhBSWPdcRc"
                                }
                                id={"nrhBSWPdcRc"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/wxHvvTs8WLQ"
                                }
                                id={"wxHvvTs8WLQ"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/zrQE4zSVWI0"
                                }
                                id={"zrQE4zSVWI0"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/ierNKhYwzSM"
                                }
                                id={"ierNKhYwzSM"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/B9_NSsRP1TI"
                                }
                                id={"B9_NSsRP1TI"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/BGAY1fi-9QQ"
                                }
                                id={"BGAY1fi-9QQ"}
                            />
                            <Reviews
                                src={
                                    "https://www.youtube-nocookie.com/embed/7be242wq2M4"
                                }
                                id={"7be242wq2M4"}
                            />
                        </div>
                    </div>
                </section>
                <Preco />
                <section className={"bg-gray-300 w-full"}>
                    <div className="frame py-10">
                        <h2
                            className={
                                "text-2xl text-center text-brand-red font-montserrat tracking-wide mb-6 md:text-4xl xl:text-5xl xl:mb-10"
                            }
                        >
                            PERGUNTAS FREQUENTES
                        </h2>
                        <Perguntas />
                    </div>
                </section>
                <Trabalho />
            </main>
            <footer className={"bg-brand-gray py-6 font-roboto md:text-xl "}>
                <p
                    className={
                        "frame relative flex justify-center items-center text-white text-center p-dif"
                    }
                >
                    <span className={"h-full w-6  fill-white mr-2"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z" />
                        </svg>
                    </span>{" "}
                    Todos os direitos reservados a Alcione Giacomitti
                </p>
                <p className={"frame text-white text-center p-footer p-dif"}>
                    Desenvolvido por Goma Digital
                </p>
            </footer>
        </>
    );
}
