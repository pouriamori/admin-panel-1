import UserCard from '../components/UserCard'
import UserComment from '../components/UserComment'
import Stat from '../components/Stat'
import BarChart from '../components/BarChart'
import { chartData } from '../lib/lib'
import DoughnutChart from '../components/DoughnutChart'

const Home = () => {

  const BarChartData = chartData.barChart
  const DoughnutChartData = chartData.DoughnutChart

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <Stat />
              </div>

              <div className="row">
                <div className="col-md-12 p-2">
                  <div className="bg-white rounded-3 p-3">
                    <h5 className="pb-3">
                      لورم ایپسوم
                    </h5>
                    <div>
                      <BarChart data={BarChartData} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pb-5">
                <div className="col-md-12 p-2">
                  <div className="bg-white rounded-3 p-3">
                    <h5 className="pb-3">
                      آخرین کامنت ها
                    </h5>
                    <div className="row">
                      <div className="col-2">
                        تصویر
                      </div>
                      <div className="col-2">
                        نام کاربری
                      </div>
                      <div className="col-8">
                        کامنت
                      </div>
                    </div>
                    <hr />
                    <UserComment />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="row p-2">
                <div className="bg-white rounded-3 p-3">
                  <UserCard image={'/4.jpg'} name={'پوریا مروتی'} id={'pouria'} />
                </div>
              </div>

              <div className="row p-2">
                <div className="bg-white rounded-3 p-3">
                  <h5 className="pb-3">
                    لورم ایپسوم متن
                  </h5>
                  <UserCard image={'/1.jpg'} name={'نسترن دیبا'} id={'nastaran'} />
                  <UserCard image={'/2.jpg'} name={'اضغر جهانبخش'} id={'asghar'} />
                  <UserCard image={'/3.jpg'} name={'کلارا فرهادی'} id={'klara'} />

                </div>
              </div>

              <div className="row p-2">
                <div className="bg-white rounded-3 p-3">
                  <h5 className="pb-3">
                    درصد ها
                  </h5>
                  <div>
                    <DoughnutChart data={DoughnutChartData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
