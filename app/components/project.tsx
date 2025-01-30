import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project:{
    url: string;
    name: string;
    stacks: string;
    about: string;
    image: string;
  }
}


const Project = ({ project }: ProjectProps) => {

    return (
      <div className="flex flex-col gap-2 md:items-center">
        <Link href={project.url} target="_blank">
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={500}
            className="relative"
          />
        </Link>
        <Card className="bg-opacity-70 bg-gray-800 text-white py-2 md:w-80 ml-2 h-[10rem]">
          <CardContent className="flex flex-col gap-2 p-3">
            <div className="flex gap-2">
              <h2>Projeto:</h2>
              <h3>{project.name}</h3>
            </div>

            <div>
              <h2>Stack:</h2>
              <p className="text-xs">{project.stacks}</p>
            </div>
            <div className="flex flex-col">
              <p>Sobre:</p>
              <p className="text-xs">{project.about}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}
 
export default Project;