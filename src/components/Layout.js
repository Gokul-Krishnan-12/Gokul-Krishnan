'use client';
import { useEffect } from "react";
import Header from "@/components/Header";

const Layout = ({children}) => {
  useEffect(() => {
    console.log(
        "%cHey there!\n%cAs a dev, I'm absolutely stoked to be part of your squad.\n\n%cAdding me to your VIP list or summoning me for your next project would be legendary.\n\n%cI promise to sprinkle some coding magic and conjure up top-notch results.\n\n%cLooking forward to making some digital wizardry happen together!\n\n%cCheers,\nGokul",
        "color: orange; font-size: 18px;",
        "font-size: 16px;",
        "font-size: 16px;",
        "font-size: 16px;",
        "font-size: 16px;",
        "font-size: 16px;"
    );
}, []);

  return (<>
  <Header/>
    <div>
    {children}
  </div>
  </>
  );
};

export default Layout;
