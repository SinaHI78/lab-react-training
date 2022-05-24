const IdCard = (props) => {
  return (
    <div className="divBorder">
      <img src={props.picture} alt="profile" />
      <div id="cardContent">
        <ul>
          <li>
            <strong>First name: </strong>
            {props.firstName}
          </li>
          <li>
            <strong>Last name: </strong>
            {props.lastName}
          </li>
          <li>
            <strong>Gender: </strong>
            {props.gender}
          </li>
          <li>
            <strong>Height: </strong>
            {props.height}
          </li>
          <li>
            <strong>Birth: </strong>
            {props.birth.toDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default IdCard;
