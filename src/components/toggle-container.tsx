import {Sheet, SheetContent,   SheetHeader, SheetTitle, SheetTrigger} from "./ui/sheet"
import { Menu } from "lucide-react"
import { NavigationRoutes } from "./navigation-routes"
import { NavLink } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"
import { cn } from "@/lib/utils"



const ToggleContainer = () => {
    const {userId} = useAuth();
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          
        </SheetHeader>
        <nav className="gap-2 flex flex-col items-start">

         <NavigationRoutes isMobile />
            {userId && (
               <NavLink  to={"/generate"} className={({ isActive }) => cn("text-base text-neutral-600 mt-6", isActive && "text-neutral-900 font-semibold")}>
               Take an Interview
             </NavLink>
            )}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default ToggleContainer