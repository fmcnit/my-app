import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


const CardStacks = () => {
    
    return (
      <div className="w-full flex flex-col items-center gap-14 md:flex-row md:justify-end md:px-4 md:gap-8">
        <Card
          className="bg-opacity-70 bg-gray-800 max-w-[330px] relative"
          id="stacks">
          <CardContent className="w-52 h-52 relative flex flex-col m-auto text-white">
            <div className="absolute -top-10 right-0 left-0 m-auto w-fit z-10">
              <Image
                width={80}
                height={80}
                alt={"javascript"}
                src={"/javascript.svg"}
              />
            </div>

            <div className="absolute -top-[7rem] right-0 left-0 m-auto w-fit z-0">
              <Image
                width={320}
                height={220}
                alt={"light"}
                src={"/light.png"}
              />
            </div>
            <div className="mt-10">
              <h2 className="text-center  text-3xl">JavaScript</h2>
              <p className="text-xs text-center">
                JavaScript é uma linguagem de programação que serve para criar
                páginas web interativas. É uma das tecnologias principais da
                World Wide Web.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-opacity-70 bg-gray-800 max-w-[330px]">
          <CardContent className="w-52 h-52 relative flex flex-col m-auto text-white">
            <div className="absolute -top-10 right-0 left-0 m-auto w-fit z-10">
              <Image
                width={80}
                height={80}
                alt={"nextJs"}
                src={"/nextjs.png"}
              />
            </div>
            <div className="absolute -top-[7rem] right-0 left-0 m-auto w-fit z-0">
              <Image
                width={320}
                height={320}
                alt={"light"}
                src={"/light.png"}
              />
            </div>
            <div className="mt-10">
              <h2 className="text-center  text-3xl">NextJs</h2>
              <p className="text-xs text-center">
                Nextjs é um framework React, que permite funcionalidades como
                renderização do lado do servidor e geração de sites estáticos
                para aplicativos da web.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-opacity-70 bg-gray-800 max-w-[330px]">
          <CardContent className="w-52 h-52 relative flex flex-col m-auto text-white">
            <div className="absolute -top-10 right-0 left-0 m-auto w-fit z-10">
              <Image
                width={80}
                height={80}
                alt={"nodejs"}
                src={"/nodejs.png"}
                className=" shadow-slate-100"
              />
            </div>
            <div className="absolute -top-[7rem] right-0 left-0 m-auto w-fit z-0">
              <Image
                width={320}
                height={220}
                alt={"light"}
                src={"/light.png"}
              />
            </div>
            <div className="mt-10">
              <h2 className="text-center  text-3xl">NodeJs</h2>
              <p className="text-xs text-center">
                Node.js é um software multiplataforma, baseado no interpretador
                V8 do Google e que permite a execução de códigos JavaScript fora
                de um navegador web.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default CardStacks; 