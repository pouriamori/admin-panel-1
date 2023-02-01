import { Chart as ChartJS } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = (props) => {
  return (
    <Doughnut data={props.data} />
  )
}

export default DoughnutChart