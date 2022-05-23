function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getStyle(r, g, b) {
  return { backgroundColor: rgbToHex(r, g, b), color: 'white' };
}

const BoxColor = (props) => {
  const hex = rgbToHex(props.r, props.g, props.b);
  const style = getStyle(props.r, props.g, props.b);

  return (
    <div style={style} className="divBorder">
      rgb({props.r},{props.g},{props.b})<br />
      {hex}
    </div>
  );
};

export default BoxColor;
