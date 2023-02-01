import { useState } from 'react'
import { sidebaritems } from '../lib/lib'
import Link from 'next/link'

const Sidebar = () => {

  const data = sidebaritems.slice()

  const [selected, setSelected] = useState(0);


  return (
    <>
      <div className="row sidebar-mobile">
        <div className="col-md-12 fixed bg-white p-4">
          <ul>
            <li className='py-2'>
              <h4 className='text-center'>
                Lorem.ir
              </h4>
            </li>

            {data.map((item, index) => {
              return (
                <li className='py-2' key={index}>
                  <Link href={item.link}>
                    <div
                      className={`h6 p-3 rounded-3 trans-all 
                    ${selected === index ? 'bg-primary text-white' : 'bg-hover-light'}`}
                      onClick={() => { setSelected(index) }}>
                      <span className="ps-2">
                        {item.icon}
                      </span>
                      <span>
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar