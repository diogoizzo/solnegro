export default function Reviews({ src, id }) {
    return (
        <div className={"mx-auto flex flex-col items-center mb-6"}>
            <iframe
                width="290"
                height="290"
                src={`${src}?enablejsapi=1&?version=3&loop=1&playlist=${id}&origin=https://solnegro.vercel.app`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
            ></iframe>
        </div>
    );
}
