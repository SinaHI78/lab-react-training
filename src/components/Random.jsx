function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Random = (props) => {
  return (
    <div className="divBorder">
      <h2>
        Random value between {props.min} and {props.max} =>{' '}
        {getRandomInt(props.min, props.max)}
      </h2>
    </div>
  );
};
export default Random;
