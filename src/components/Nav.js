'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  ];

const Nav = () => {
  const router =useRouter();
  const pathName =router.pathname;
  return (
    <nav className='hidden xl:flex xl:flex-col items-center xl:justify-end xl:mb-[50px] gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
      text-3xl xl:text-xl xl:rounded-full '>
        {navData.map((link,index)=>{
          return <Link className={`${link.path===pathName&& 'text-accent'} relative flex items-center group
           hover:text-accent transition-all duration-300`} href={link.path} key={index}>
            
            <div className='text-3xl'>{link.icon}</div>
          
            </Link>
        })}
      </div>
    </nav>
  );
};

export default Nav;
