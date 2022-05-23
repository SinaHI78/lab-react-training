const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt="profile" />
      <div className="info">
        <div className="infoTitle">
          <h4>
            <strong>First name: </strong>
            {props.firstName}
          </h4>
        </div>
        <h4>
          <strong>Last name: </strong>
          {props.lastName}
        </h4>
        <h4>
          <strong>Gender: </strong>
          {props.gender}
        </h4>
        <h4>
          <strong>Height: </strong>
          {props.height}
        </h4>
        <h4>
          <strong>Birth: </strong>
          {props.birth.toLocaleDateString()}
        </h4>
      </div>
    </div>
  );
};
export default IdCard;
