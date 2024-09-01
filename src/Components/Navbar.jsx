import React, { useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [navLink,setNavLink] = useState('home')
  return (
  <nav className='text-white flex items-center justify-between px-5 py-5'>
    <h2 className='text-[30px]  font-bold res-1000:text-[35px] res-600:text-[1.4rem]'> <span className='text-[#ff5858]'>EV</span>-olution</h2>
    <div className='z-10 px-4 py-2 text-[24px] cursor-pointer text-black bg-white rounded-2xl res-70:hidden ' onClick={()=>setMenu(!menu)}>{menu ? 'X' : '=' }</div>
    <ul className={`Nav-ul ${menu ? 'ml-[0px]' : 'ml-[-400px]'}`}>

  
   <li><a href="#"  onClick={()=>setNavLink('home')} className={`${navLink==='home' ?  'liFocus' : ' text-[17px]'}`}>Home</a></li>
   <li><a href="#" onClick={()=>setNavLink('product')}  className={`${navLink==='product' ?  'liFocus' : ' text-[17px]'}`}>Product</a></li>
   <li><a href="#" onClick={()=>setNavLink('features')}  className={`${navLink==='features' ?  'liFocus' : ' text-[17px]'}`}>features</a></li>
   <li><a href="#" onClick={()=>setNavLink('contact')}  className={`${navLink==='contact' ?  'liFocus' : ' text-[17px]'}`}>Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar