import ButtonSocialMedia from "./buttons-social-media";

const Footer = () => {
    return (
      <footer className=" relative text-white bg-opacity-70 bg-gray-800 h-12 flex items-center p-2">
        <p className="text-xs">
          FMDev - @Portifólio de Fabiano Magalhães 2025
        </p>
        <div>
          <ButtonSocialMedia />
        </div>
      </footer>
    );
}
 
export default Footer;