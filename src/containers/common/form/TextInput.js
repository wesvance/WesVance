import React, {PropTypes} from 'react';
import '../../../assets/styles/components/common/form/TextInput.scss';

const TextInput =({name, type, label, className, accept, id, rows, onChange, placeholder, defaultValue, value, error, autoComplete}) =>{
  let wrapperClass="text-input";
  if (error && error.length> 0){
    wrapperClass += ' has-error';
  }

  return(
    <div className={wrapperClass}>
      <div className="field">
        <input
          type={type}
          name={name}
          id={id}
          rows={rows}
          className={"form-control " + className}
          placeholder={placeholder}
          accept={accept}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          autoComplete={autoComplete || true}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes={
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  error: PropTypes.string
};

export default TextInput
