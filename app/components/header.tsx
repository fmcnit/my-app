import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
    return (
      <Card className="m-2 p-2 bg-opacity-70 bg-gray-800 flex items-center justify-between">
        <div className="flex gap-2 text-white">
          <div className="flex items-center">
            <Image src={"/logo1.png"} width={40} height={40} alt="logo" />
          </div>
          <div>
            <h1>Fabiano Magalhães</h1>
            <p className="text-xs">Dev FullStack JavaScript</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-white">
          <ol className="flex items-center gap-4 mx-2">
            <li className="border-2 border-transparent  hover:border-b-blue-500 hover:cursor-pointer">
              Home
            </li>
            <li className="border-2 border-transparent  hover:border-b-blue-500 hover:cursor-pointer">
              Stacks
            </li>
            <li className="border-2 border-transparent  hover:border-b-blue-500 hover:cursor-pointer">
              About
            </li>
            <li className="border-2 border-transparent  hover:border-b-blue-500 hover:cursor-pointer">
              Projects
            </li>
            <li className="border-2 border-transparent  hover:border-b-blue-500 hover:cursor-pointer">
              Contact
            </li>
          </ol>
        </div>
        <Sheet>
          <SheetTrigger className="text-white md:hidden">
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent className="text-center bg-opacity-70 bg-gray-800 text-white">
            <SheetTitle className="text-white">Menu</SheetTitle>
            <ol className="space-y-4 mt-4">
              <li className="border-2 border-transparent hover:border-b-blue-500">
                Home
              </li>
              <li className="border-2 border-transparent hover:border-b-blue-500">
                About
              </li>
              <li className="border-2 border-transparent hover:border-b-blue-500">
                Projects
              </li>
              <li className="border-2 border-transparent hover:border-b-blue-500">
                Contact
              </li>
            </ol>
          </SheetContent>
        </Sheet>
      </Card>
    );
}
 
export default Header;