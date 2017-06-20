import React, {PropTypes} from 'react';
import '../../assets/styles/components/common/form/FileInput.scss';

const FileInput =({name, type, label, className, onChange, placeholder, value, error}) =>{
  return(
    <div className={wrapperClass}>
      <input
        type={'file'}
        name={name}
        className={"form-control-file " + className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

FileInput.propTypes={
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default FileInput
