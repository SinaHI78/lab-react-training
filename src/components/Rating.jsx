const Rating = (props) => {
  const fullStarCount = Math.round(Number(props.children));
  const emptyStarCount = 5 - fullStarCount;
  return (
    <div>
      {'★'.repeat(fullStarCount)}
      {'☆'.repeat(emptyStarCount)}
    </div>
  );
};

export default Rating;
