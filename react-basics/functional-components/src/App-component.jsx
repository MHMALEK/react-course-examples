const AppComponent = ({ name, handleClickProps }) => {
  const someDefaultFunction = () => {
    alert("some default variable");
  };
  const handleClick = (event) => {
    handleClickProps();
  };
  return (
    <p onClick={handleClick}>Some component {name || "someOtherString"}</p>
  );
};

AppComponent.defaultProps = {
  handleClickProps: () => alert("default handler"),
};
export default AppComponent;
