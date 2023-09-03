

import "./form-button.styles.scss";

const BUTTON_TYPE_CLASSNAMES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const FormButton = ({ buttonType, children, ...otherProps }) => {
    const buttonTypeClassName = BUTTON_TYPE_CLASSNAMES[buttonType];
    return (
        <button
            className={`form-button-container ${buttonTypeClassName}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default FormButton;
