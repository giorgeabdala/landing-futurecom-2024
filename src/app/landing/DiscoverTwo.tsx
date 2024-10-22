import Area from "@/app/components/Area";
import Image from 'next/image'
import Link from "next/link";


export default function DiscoverTwo() {
    return (
        <div className="bg-gradient-to-b from-black to-background-via-connect">
            <div className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-lg sm:text-xl md:text-2xl gap-8 my-12 sm:my-16 lg:my-24 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="leading-relaxed xl:leading-loose">
                    <p className="xl:hidden">
                        Participe do evento com líderes e especialistas em economia tokenizada. Oportunidades de
                        networking, negócios e aprendizado com empresas, desenvolvedores e autoridades.
                    </p>

                    <p className="hidden xl:block">
                        <span className="font-bold">Mais de 300 palestrantes,</span> contando com alguns dos especialistas mais renomados do Brasil.
                    </p>

                    <p>
                        Para acessar a programação completa do evento, <Link href="https://www.futurecom.com.br/pt/Congresso/Future-Congress.html">clique aqui.</Link>
                    </p>

                    <p>
                        Junte-se a nós e seja parte da transformação digital que está moldando o futuro.
                    </p>
                </div>

                <Image
                    className="rounded-full w-full sm:w-auto"
                    src="/asset.png"
                    alt="imagem dos palestrantes da blockchain Rio"
                    width={571}
                    height={606}
                />
            </div>
        </div>
    )
}
