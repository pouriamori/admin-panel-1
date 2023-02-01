import { BsList, BsEnvelope, BsBell } from "react-icons/bs";
import { useState } from 'react'

const Nav = () => {

  const [menuClicked, setMenuClicked] = useState(true);

  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="row py-4 px-2 align-items-center text-primary">
            <div className="col-12">
              <ul className="text-dark d-flex justify-content-end align-items-center">
                <li className="px-3 h4">
                  <BsEnvelope />
                </li>
                <li className="px-3 h4">
                  <BsBell />
                </li>
                <li className="px-3">
                  <div className="d-flex align-items-center">
                    <img src="/4.jpg" alt="" className="circle-3 rounded-circle" />
                    <div className="pe-3">
                      <p className="h6 fw-bold">
                        پوریا مروتی
                      </p>
                      <p className="small pt-1">
                        سوپر ادمین
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav