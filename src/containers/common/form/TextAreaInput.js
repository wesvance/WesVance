import React, {PropTypes} from 'react';
import '../../../assets/styles/components/common/form/TextAreaInput.scss';

const TextAreaInput =({name, rows, cols, className, label, onChange, placeholder, value, error}) =>{
  let wrapperClass="textarea-input";
  if (error && error.length> 0){
    wrapperClass += " has-error";
  }

  return(
    <div className={wrapperClass}>
      <div className="field">
        <textarea
          type="text"
          rows={rows}
          cols={cols}
          name={name}
          className={"form-control " + className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextAreaInput.propTypes={
  name: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextAreaInput
