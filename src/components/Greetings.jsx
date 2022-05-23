function getGreeting(lang) {
  if (lang === 'de') {
    return 'Hallo';
  } else if (lang === 'fr') {
    return 'Bonjour';
  } else if (lang === 'es') {
    return 'Ola';
  } else {
    return 'Hello';
  }
}

const Greetings = (props) => {
  return (
    <div>
      <h2>
        {getGreeting(props.lang)} {props.children}
      </h2>
    </div>
  );
};
export default Greetings;
