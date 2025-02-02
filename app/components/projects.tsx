import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Project from "./project";


const Projects = () => {
  
    return (
      <div className="mt-10 p-2 pl-0 overflow-x-scroll scrollbar-hidden">
        <Carousel>
          <CarouselContent className="flex items-center">
            {/*Project Folha de Rosto */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-start  text-white">
              <div>
                <h2 className="text-3xl ml-4">Meus Projetos</h2>
                <p className="text-xs ml-28">Arraste para o lado</p>
              </div>
              <Image
                src={"/MinhaImg.png"}
                alt="minha"
                width={500}
                height={500}
              />
            </CarouselItem>
            {/* Project 1 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-1.png",
                  name: "Landing Page Cidades",
                  stacks: "Javascript, CSS",
                  about: "Uma Landing page das cidades mais lindas do mundo",
                  url: "https://site-scroll.vercel.app/",
                }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-2.png",
                  name: "Site de Restaurante",
                  stacks: "Javascript, CSS",
                  about: "Uma Landing page com card",
                  url: "https://cardapio-rest-2.vercel.app/",
                }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-3.png",
                  name: "Site One Piece",
                  stacks: "Javascript, CSS",
                  about: "Uma Landing page sobre o anime One Piece",
                  url: "https://project-one-piece.vercel.app/",
                }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-4.png",
                  name: "Página de Login Animada",
                  stacks: "Javascript, CSS",
                  about: "Um Login animado e responsivo",
                  url: "https://login-cloud.vercel.app/",
                }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-5.png",
                  name: "Página de salão de cabelereiro",
                  stacks: "Javascript, CSS",
                  about: "Um site do salão juliana Rodrigues",
                  url: "https://site-juliana-eight.vercel.app/",
                }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-6.png",
                  name: "Site Cafeteria",
                  stacks: "Javascript, CSS",
                  about: "Um site de uma cafeteria",
                  url: "https://cafeteria-woad-pi.vercel.app/",
                }}
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-7.png",
                  name: "Site Carros 3D",
                  stacks: "Javascript, CSS",
                  about: "Animações para exposição de carros",
                  url: "https://site3d-chi.vercel.app/",
                }}
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-8.png",
                  name: "Site Carros 3D",
                  stacks: "Javascript, CSS",
                  about: "Animações para exposição de carros",
                  url: "https://site3d-chi.vercel.app/",
                }}
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col gap-5">
              <Project
                project={{
                  image: "/project-9.png",
                  name: "Site Carros 3D",
                  stacks: "Javascript, CSS",
                  about: "Animações para exposição de carros",
                  url: "https://site3d-chi.vercel.app/",
                }}
              />
            </CarouselItem>

         
          </CarouselContent>
        </Carousel>
      </div>
    );
}
 
export default Projects;