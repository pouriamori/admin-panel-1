import { BsEyeFill, BsPersonFill, BsPersonPlusFill, BsBookmarkDashFill } from 'react-icons/bs'

const Stat = () => {
  return (
    <>
      <div className="col-md-3 col-6 p-2">
        <div className="bg-white rounded-3 p-3 d-flex align-items-center">
          <div className='bg-purple rounded-3 p-2'>
            <BsEyeFill className='text-white h2' />
          </div>
          <div className='pe-2'>
            <p className='small text-dark pb-2'>
              نمایش پروفایل
            </p>
            <p className='fw-bold'>
              0
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-6 p-2">
        <div className="bg-white rounded-3 p-3 d-flex align-items-center">
          <div className='bg-blue rounded-3 p-2'>
            <BsPersonFill className='text-white h2' />
          </div>
          <div className='pe-2'>
            <p className='small text-dark pb-2'>
              لورم ایپسوم
            </p>
            <p className='fw-bold'>
              0
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-6 p-2">
        <div className="bg-white rounded-3 p-3 d-flex align-items-center">
          <div className='bg-green rounded-3 p-2'>
            <BsPersonPlusFill className='text-white h2' />
          </div>
          <div className='pe-2'>
            <p className='small text-dark pb-2'>
              لورم ایپسوم
            </p>
            <p className='fw-bold'>
              0
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-6 p-2">
        <div className="bg-white rounded-3 p-3 d-flex align-items-center">
          <div className='bg-red rounded-3 p-2'>
            <BsBookmarkDashFill className='text-white h2' />
          </div>
          <div className='pe-2'>
            <p className='small text-dark pb-2'>
              لورم ایپسوم
            </p>
            <p className='fw-bold'>
              0
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stat