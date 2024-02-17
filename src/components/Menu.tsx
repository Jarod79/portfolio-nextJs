import { menuList } from "@/helpers/Menu";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const Menu = ({ show, setMenuShow }:{show:boolean, setMenuShow:Dispatch<SetStateAction<boolean>>}) => {
  return (
    <>
      <div className={show ? "menu" : "menuClose"}>
        <div className={show ? "menu__link" : "menuClose__link"}>
          {menuList.map(({ pathFr, nameFr }:{pathFr:string, nameFr:string}, index:number) => (
            <Link key={index} href={pathFr} onClick={() => setMenuShow(false)}>
              {nameFr}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
