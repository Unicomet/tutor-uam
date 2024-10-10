import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, NavLink } from "react-router-dom";

interface HederProps {
  routes: string[];
  textButton: string[];
}

export default function Header({ routes, textButton }: HederProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <NavLink to="/">
        <div className="flex items-center ms-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/559240774ca61a648e61a63939052e484c6b01defefb1d35aac35f1d6e1ff8d5?apiKey=d014db5933b042d7872678898cc44b5e&&apiKey=d014db5933b042d7872678898cc44b5e"
            alt="Company Logo"
            className="h-5 w-5"
          />
          <span className="ml-2 text-lg font-bold">Tutor UAM</span>
        </div>
      </NavLink>

      {/* Desktop Menu */}

      <div className="hidden md:flex items-center space-x-4 me-4">
        {routes.map((route, index) => (
          <Link to={`../${route}`}>
            <Button className="btn btn-sm">{textButton[index]}</Button>
          </Link>
        ))}
        <Link to="../editar-perfil">
          <Avatar>
            {/* <AvatarImage
            src="/placeholder.svg?height=32&width=32"
            alt="User Avatar"
          /> */}
            <AvatarFallback className="bg-slate-200">
              GM
              {/* GM {tutor.name[0] + tutor.name.split(" ")[1][0]} */}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="../mis-asesorias">
                <Button className="w-full">Mis asesorías</Button>
              </Link>
              <Link to="../buscar-tutor">
                <Button className="w-full">Buscar tutor</Button>
              </Link>
              <div className="flex items-center justify-center">
                <Avatar>
                  {/* <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="User Avatar"
                  /> */}
                  <AvatarFallback>GM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
