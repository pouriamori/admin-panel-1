import '../styles/main.css'
import '../styles/add.css'
import '../assets/fonts/fonts.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar'
import SidebarButton from '../components/SidebarButton'
import SidebarMobile from '../components/SidebarMobile'



export default function App({ Component, pageProps }: AppProps) {

  const [sidebarClick, setSidebarClick] = useState(true);
  const [sidebarMobileClick, setSidebarMobileClick] = useState(false);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row position-relative">



          {/* سایدبار ها */}
          <div className={` ${sidebarClick ? 'col-md-2 d-none d-md-block' : 'd-none'}`}>
            <Sidebar />
          </div>
          <div className={`sidebar-mobile d-md-none ${sidebarMobileClick ? 'col-md-12' : 'd-none'}`}>
            <SidebarMobile />
          </div>



          {/* صفحه ها */}
          <div className={`position-relative ${sidebarClick ? 'col-md-10' : 'col-md-12'}`}>
            <div
              className='position-absolute top-0 end-0 p-2 sidebar-button-mobile'
              onClick={() => { setSidebarClick(!sidebarClick); setSidebarMobileClick(!sidebarMobileClick) }}>
              <SidebarButton />
            </div>
            <Nav />
            <Component {...pageProps} />
          </div>



        </div>
      </div>
    </>
  )
}


