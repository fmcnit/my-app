import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const ButtonSocialMedia = () => {
    return (
      <Card className="right-0 m-4 h-fit w-fit bottom-0 absolute bg-opacity-70 bg-gray-800 flex flex-col items-center md:flex-row md:right-4">
        <Button className="bg-transparent hover:bg-transparent h-fit hover:scale-125 mt-2 transition-transform duration-500 md:mt-0">
          <Image src={"/insta.png"} alt="Insta" width={30} height={30} />
        </Button>
        <Button className="bg-transparent hover:bg-transparent h-fit hover:scale-125  transition-transform duration-500">
          <Image src={"/wtp.png"} alt="Whatsapp" width={30} height={30} />
        </Button>

        <Button className="bg-transparent hover:bg-transparent h-fit hover:scale-125 mb-2 transition-transform duration-500 md:mb-0">
          <Image src={"/git.png"} alt="GitHub" width={30} height={30} />
        </Button>
        
        
      </Card>
    );
}
 
export default ButtonSocialMedia; 