import Area from "@/app/components/Area";
import SocialMedia from "@/app/components/SocialMedia";
import Link from "next/link";


export default function Footer() {

    return (
        <Area className="bg-gradient-to-b from-background-via-connect to-background-primary">

            <div id="footer" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-20">
                <div id="contatos" className="flex flex-col gap-4 text-gray-400">
                    <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-polkadot-rose">Polkadot Brasil</h1>

                    <div className="flex flex-col mt-4">
                        <SocialMedia />
                    </div>

                    <div className="mt-12">

                        <Link href="https://maps.app.goo.gl/SuAegbbxTdGhsqLk7" >
                           <span className="inline-block p-3 text-polkadot-rose rounded-full bg-gray-800">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                  stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                                </span>

                        </Link>


                        <h2 className="mt-4 text-base font-medium text-polkadot-rose">Endereço da Blockchain Rio:</h2>
                        <p className="mt-2 text-sm text-gray-400">Expomag</p>
                        <p className="mt-2 text-sm text-gray-400">R. Beatriz Larragoiti Lucas, s/n </p>
                        <p className="mt-2 text-sm text-gray-400">Cidade Nova, Rio de Janeiro - RJ 20211-175</p>
                    </div>

                </div>

                <div id="mapa">
                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 ">
                        <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight={0} marginWidth={0}
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8370678653637!2d-46.63223132357891!3d-23.646005364709442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5adda4c3cb95%3A0x31916ce58f719167!2sS%C3%A3o%20Paulo%20Expo!5e0!3m2!1spt-BR!2sus!4v1726521350509!5m2!1spt-BR!2sus"></iframe>



                    </div>

                </div>

            </div>


        </Area>
    )
}