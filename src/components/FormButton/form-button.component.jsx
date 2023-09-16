

import "./form-button.styles.scss";

export const BUTTON_TYPE_CLASSNAMES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const FormButton = ({ buttonType, children, isLoading, ...otherProps }) => {
  const buttonTypeClassName = BUTTON_TYPE_CLASSNAMES[buttonType];
  return (
    <button
      className={`form-button-container ${buttonTypeClassName}`}
      disabled={isLoading}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FormButton;
