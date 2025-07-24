import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FC, PropsWithChildren } from "react";

export const AsideMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] duration-150">
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
