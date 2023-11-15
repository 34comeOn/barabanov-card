import Logo from "../../molecules/logo";
import Navigation from "../../molecules/navigation/navigation";

export default function Header() {
   return( 
        <header className="flex flex-row justify-between w-full">
            <Logo />
            <Navigation />
        </header>
   )
}