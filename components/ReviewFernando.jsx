export default function ReviewFernando({ src, nome }) {
    return (
        <div className={"mx-auto flex flex-col items-center mb-6"}>
            <iframe
                width="290"
                height="290"
                src={`${src}?enablejsapi=1&origin=https://solnegro.vercel.app`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
            ></iframe>
            <h3
                className={
                    "mt-3 font-roboto font-semibold text-2xl md:text-3xl"
                }
            >
                {nome}
            </h3>
            <p className={"font-roboto text-lg text-center md:text-2xl p-dif"}>
                Geólogo, autor e <br className={"hidden lg:block"} />
                prof. de Tai Chi
            </p>
        </div>
    );
}
