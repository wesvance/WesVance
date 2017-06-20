import React, {PropTypes} from 'react';
import '../../../assets/styles/components/common/form/TextInput.scss';

const SelectInput = (props) =>{
  let wrapperClass="text-input";
  if (props.error && props.error.length> 0){
    wrapperClass += ' has-error';
  }

  return(
    <div className={wrapperClass}>
      <div className="field">
        <select
          type={props.type}
          name={props.name}
          id={props.id}
          className={"form-control " + props.className}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
        {props.children}
        </select>
      </div>
    </div>
  );
};

SelectInput.propTypes={
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput
