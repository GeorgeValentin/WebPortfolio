import "./LogoContainer.styles.scss";

const LogoContainer = ({ logoValue }) => {
  return <img className="logo-img" src={logoValue} alt="logo-value" />;
};

export default LogoContainer;
