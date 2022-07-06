import Inscricao from "./Inscricao";

export default function Preco() {
    return (
        <div className={"w-full bg-black py-10"}>
            <div className="frame">
                <p
                    className={
                        "text-white text-center font-roboto text-lg font-semibold md:text-3xl"
                    }
                >
                    Aproveite nossa oferta de lançamento:
                    <br />
                    <span className={"text-2xl inline-block mt-4 md:text-3xl"}>
                        de <span className={"preco-riscado"}>797,00</span> por
                    </span>
                    <br />
                    <span className={"text-4xl text-brand-red md:text-6xl"}>
                        R$ 597,00
                    </span>{" "}
                    <span className={"font-normal md:text-2xl"}>à vista</span>
                    <br />
                    <span className={"text-2xl md:text-3xl"}>
                        12 x de 99,00 no cartão
                    </span>
                </p>
                <Inscricao />
            </div>
        </div>
    );
}
