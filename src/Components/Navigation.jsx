import React, { useState } from 'react'

const Navigation = () => {
  const [menu,setMenu] = useState(false)
  const [navLink,setNavLink] = useState('home')
  return (
<nav className='flex justify-between px-10 py-2 items-center text-white'>
    <div>
        <h2 className='text-[30px]  font-bold res-1000:text-[30px] res-600:text-[1.4rem]'>EV-olution</h2>
    </div>
    <div className='px-4 py-2 text-[24px] cursor-pointer text-black bg-white rounded-2xl res-70:hidden ' onClick={()=>setMenu(true)}>=</div>
    <ul className={`res-69:gap-[20px] res-70:flex  transition duration-500 ${menu ? 'showMenu ' : 'hidden'}`}>
        <li className='li-space'><a href="#" className='text-[17px] bg-white px-2 text-black font-semibold py-1 rounded-sm fixed right-2 res-70:hidden block' onClick={()=> setMenu(false)}>X</a></li>
   <li className='li-space'><a href="#"  onClick={()=>setNavLink('home')} className={`${navLink==='home' ?  'liFocus' : 'font-thin text-[17px]'}`}>Home</a></li>
   <li className='li-space'><a href="#" onClick={()=>setNavLink('product')}  className={`${navLink==='product' ?  'liFocus' : 'font-thin text-[17px]'}`}>Product</a></li>
   <li className='li-space'><a href="#" onClick={()=>setNavLink('features')}  className={`${navLink==='features' ?  'liFocus' : 'font-thin text-[17px]'}`}>features</a></li>
   <li className='li-space'><a href="#" onClick={()=>setNavLink('contact')}  className={`${navLink==='contact' ?  'liFocus' : 'font-thin text-[17px]'}`}>Contact</a></li>
    </ul>
 </nav>
  )
}

export default Navigation