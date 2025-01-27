import Image from "next/image";
import ButtonSocialMedia from "./buttons-social-media";

const Principal = () => {


    return (
      <div className="h-screen">
        <div className="relative flex">
            <div className="fixed -left-36 md:w-[32rem] md:left-0 rounded-b-full overflow-hidden">
              <Image
                src={"/MinhaImg.png"}
                width={800}
                height={800}
                alt="Minha foto"
                className="opacity-20"
              />
            
            </div>
            <div className="absolute w-1/2 right-0 md:right-5 top-16 text-white m-4 text-right">
                <p className="text-4xl md:text-6xl">“A simplicidade é a sofisticação máxima.” <br></br><span className="text-xs">– Leonardo da Vinci</span></p>
            </div>
            
        </div>
        <ButtonSocialMedia/>
      </div>
    );
}
 
export default Principal;