import {
  BsGridFill,
  BsShop,
  BsBoxSeam,
  BsBasketFill,
  BsPercent,
  BsChatRightDotsFill,
  BsPeopleFill,
  BsFillChatDotsFill
} from "react-icons/bs"

export const sidebaritems = [
  {
    id: '1',
    title: 'داشبورد',
    icon: <BsGridFill />,
    link: '/',
  },
  {
    id: '2',
    title: 'فروشگاه',
    icon: <BsShop />,
    link: '/shop',
  },
  {
    id: '3',
    title: 'محصولات',
    icon: <BsBoxSeam />,
    link: '/products',
  },
  {
    id: '4',
    title: 'سفارشات',
    icon: <BsBasketFill />,
    link: '/orders',
  },
  {
    id: '5',
    title: 'تخفیف ها',
    icon: <BsPercent />,
    link: '/off',
  },
];


export const chartData = {
  barChart: {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [
      {
        label: 'فروش ماهانه',
        data: [20, 50, 30, 80, 90, 50, 60, 60, 100, 110, 80, 120],
        backgroundColor: '#86EFAC',
        borderColor: '#4ADE80',
        borderWidth: 2,
        borderRadius: 10,

      }
    ]
  },
  DoughnutChart: {
    labels: ['فروردین', 'اردیبهشت', 'خرداد'],
    datasets: [
      {
        label: 'فروش ماهانه',
        data: [20, 50, 30],
        backgroundColor: ['#16A34A', '#F43F5E', '#4F46E5'],
        borderColor: '#1C1917',
        borderWidth: 1,
        borderRadius: 0,

      }
    ]
  },
};