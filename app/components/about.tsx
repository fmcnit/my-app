import { Card } from "@/components/ui/card";

const About = () => {
    return ( 
        <Card className="text-white h-fit flex p-5 gap-5 mx-4 mt-8 md:flex-col  bg-opacity-70 bg-gray-800">
            <div>
                <h2 className="text-xl md:text-center md:text-3xl text-end">
                    Sobre Mim
                </h2>
            </div>
            <div>
                <p className="text-xs md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea accusamus nulla dolores, consequatur voluptates laboriosam sed minima reiciendis error? Odit unde laudantium distinctio dicta aliquid minus odio aliquam maiores est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos totam consequuntur beatae, maiores voluptate fugit incidunt nisi sit praesentium aliquam? Quae, molestiae saepe. Totam quisquam praesentium possimus? Iure, eum.</p>
            </div>
        </Card>
     );
}
 
export default About;