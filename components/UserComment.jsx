import { useState } from 'react'

const UserComment = () => {

  const [comments, setComments] = useState(
    [
      {
        id: 1,
        username: 'reza',
        image: '/1.jpg',
        comment:
          'ایپسوم متن ساختگی با تولید سادگی'
      },
      {
        id: 2,
        username: 'nima',
        image: '/2.jpg',
        comment:
          'لورم ایپسوم با تولید سادگی'
      },
      {
        id: 3,
        username: 'shadi',
        image: '/3.jpg',
        comment:
          'لورم ایپسوم متن ساختگی سادگی'
      },
    ]
  );

  return (
    <>

      {comments.map((item, index) => {
        return (
          <div className="row align-items-center py-2" key={index}>
            <div className="col-2">
              <img src={item.image} alt="" className="circle-3 rounded-circle" />
            </div>
            <div className="col-2">
              <p className="text-light small">
                {item.username}
              </p>
            </div>
            <div className="col-8">
              <p className="text-light small">
                {item.comment}
              </p>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default UserComment