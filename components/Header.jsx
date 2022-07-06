import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-black h-48 md:h-80 xl:h-[450px] w-full relative">
            <div className={"flex items-center h-full "}>
                <div
                    className={
                        "flex flex-col items-start w-3/4  justify-center h-full ml-[6%] lg:ml-[11%] xl:ml-[6%] 2xl:items-start 3xl:ml-[15%]"
                    }
                >
                    <div className="flex flex-col">
                        <h1
                            className={
                                "relative w-[250px] md:w-[550px] h-16 md:h-24 xl:w-[920px] xl:h-44 2xl:h-52 2xl:w-[1000px]  "
                            }
                        >
                            <Image
                                src={"/images/solnegro.svg"}
                                alt={"logo do Sol Negro"}
                                layout={"fill"}
                            />
                        </h1>
                        <p
                            className={
                                "text-white font-robotoCond text-right md:text-3xl md:mt-3 xl:text-5xl"
                            }
                        >
                            Sociedades Ocultistas na {""}
                            <br className={"md:hidden"} />
                            Alemanha Nazista
                        </p>
                    </div>
                </div>
                <div className={"w-1/4 h-full absolute right-0"}>
                    <span className={"md:hidden"}>
                        <Image
                            src={"/images/mandala.png"}
                            alt={"madala do Sol Negro"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"20px"}
                        />
                    </span>
                    <span className={"hidden md:block 2xl:hidden"}>
                        <Image
                            src={"/images/mandala.png"}
                            alt={"madala do Sol Negro"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"70px"}
                        />
                    </span>
                    <span className={"hidden 2xl:block"}>
                        <Image
                            src={"/images/mandala.png"}
                            alt={"madala do Sol Negro"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"130px"}
                        />
                    </span>
                </div>
            </div>
        </header>
    );
}
