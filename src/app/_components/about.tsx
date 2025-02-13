import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { MapPin } from "lucide-react"

export function About(){
    return(
       <section className="bg-[#FDF6ec] py-16 ">
        <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden lg:">
                <Image
                src={about1Img}
                alt="foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
                />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8  border-4 overflow-hidden rounded-lg border-white">
                <Image
                src={about2Img}
                alt="foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover"
                />
            </div>

            </div>

            <div className="space-y-6 px-1 ">
                <h2 className="text-4xl font-bold">Sobre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestias beatae ullam nesciunt officiis repellendus quis similique tempora rerum quaerat nihil?</p>
                
                <ul className="space-y-4 px-1">
                    <li className="text-red-500 flex items-center gap-2">
                     Aberto desde 2007
                    </li>

                    <li className="text-red-500 flex items-center gap-2">
                     Equipe com mais de 10 veterinários
                    </li>

                    <li className="text-red-500 flex items-center gap-2">
                     Qualidade é nossa prioridade
                    </li>
                </ul>

                <div className="flex gap-2 items-center justify-center ">
                <a href="#"
                className="bg-[#7cb518] text-white flex items-center justify-center w-fit gap-2 px-4 rounded-md py-1">

                 <WhatsappLogo className="w-5 h-5 text-black"/>
                 Contato via WhatsApp
                </a>

                <a href="https://maps.app.goo.gl/sJeukifvBckxBq3k6" target="blank"
                className="bg-[#b8bcb2] text-black flex items-center justify-center w-fit gap-2 px-4 rounded-md py-1">

                 <MapPin className="w-5 h-5 text-white"/>
                 Endereço da loja
                </a>
                
                </div>

               

            </div>
        </div>
       </section>

    )
}