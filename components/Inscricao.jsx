import Link from "next/link";
import Image from "next/image";
import customLoader from "./customLoader";
export default function Inscricao() {
    return (
        <div className={"flex flex-col w-full mt-10 "}>
            <Link href={"https://www.google.com/"} prefetch={false}>
                <div
                    className={
                        "py-4 w-full bg-brand-red-dark rounded-3xl border-4 hover:border-brand-red-dark  border-brand-red inline-flex justify-center items-center text-white text-lg tracking-wide font-montserrat md:text-3xl  xl:w-1/2 xl:mx-auto xl:py-8 hover:bg-brand-red transition-colors"
                    }
                >
                    FAZER MINHA INSCRIÇÃO
                </div>
            </Link>
            <div
                className={
                    "flex flex-col mt-6 justify-center items-center md:space-y-3 xl:flex-row xl:w-1/2 xl:mx-auto"
                }
            >
                <div className={"flex h-fit"}>
                    <span className={"min-w-fit mr-2 md:hidden"}>
                        <Image
                            loader={customLoader}
                            src={"/icons/estrela.svg"}
                            alt={"ícone de estrela"}
                            width={20}
                            height={20}
                            layout={"intrinsic"}
                        />
                    </span>
                    <span className={"hidden md:block mr-2 xl:hidden"}>
                        <Image
                            loader={customLoader}
                            src={"/icons/estrela.svg"}
                            alt={"ícone de estrela"}
                            width={40}
                            height={40}
                            layout={"intrinsic"}
                        />
                    </span>
                    <span className={"hidden xl:block mr-2"}>
                        <Image
                            loader={customLoader}
                            src={"/icons/estrela.svg"}
                            alt={"ícone de estrela"}
                            width={80}
                            height={80}
                            layout={"intrinsic"}
                        />
                    </span>
                    <p
                        className={
                            "text-sm text-white font-roboto text-center md:text-2xl self-center "
                        }
                    >
                        7 dias de garantia
                    </p>
                </div>
                <div className={"flex flex-col"}>
                    <p
                        className={
                            "text-white font-roboto text-center text-sm inline-flex items-center justify-center md:text-2xl"
                        }
                    >
                        <span className={"mr-2 md:hidden"}>
                            <Image
                                loader={customLoader}
                                src={"/icons/cadeado.svg"}
                                alt={"ícone de arquivos do curso"}
                                width={20}
                                height={20}
                                layout={"intrinsic"}
                            />
                        </span>
                        <span className={"hidden md:block mr-2"}>
                            <Image
                                loader={customLoader}
                                src={"/icons/cadeado.svg"}
                                alt={"ícone de arquivos do curso"}
                                width={35}
                                height={35}
                                layout={"intrinsic"}
                            />
                        </span>
                        Pagamento 100% garantido
                    </p>
                    <span>
                        <Image
                            loader={customLoader}
                            src={"/images/bandeiras-cartoes.png"}
                            alt={
                                "bandeiras dos cartões que servem com pagamento"
                            }
                            width={520}
                            height={65}
                            layout={"intrinsic"}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
