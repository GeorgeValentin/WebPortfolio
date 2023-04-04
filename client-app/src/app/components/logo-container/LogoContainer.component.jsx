import "./LogoContainer.styles.scss";

const LogoContainer = (props) => {
  const { logoValue } = props;

  return <img className="logo-img" src={logoValue} alt="logo-value" />;
};

export default LogoContainer;
