

const UserCard = (props) => {
  return (
    <>
      <div className="row align-items-center py-2">
        <div className="col">
          <img src={props.image} alt="" className="circle-5 rounded-circle" />
        </div>
        <div className="col">
          <p className="lh-lg">
            {props.name}
          </p>
          <p className="small text-light">{props.id}@</p>
        </div>
      </div>
    </>
  )
}

export default UserCard