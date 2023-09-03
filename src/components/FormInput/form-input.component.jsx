
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps  }) => {
    const labelClassName = otherProps.value.length ? 'shrink' : null;
    return (
        <div className="form-input-container">
            <input className="form-input" {...otherProps} />
            {label && (
                <label className={`form-input-label ${labelClassName}`}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
