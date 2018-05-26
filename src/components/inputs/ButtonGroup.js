import React from 'react';
import upperFirst from 'lodash/upperFirst';

import './ButtonGroup.css';

const ButtonGroup = ({
  btnLabels, btnValues, currentValue,
  clickHandler, classNames, input,
  name, id, label, grayBg,
}) => {
  return <div className={classNames}>
    {label && <label htmlFor={id}>{label}</label>}
    <div id={id} className="button-group">
      {btnValues.map((value, index) =>
        <button
          key={value}
          name={(input && input.name) || name}
          value={value}
          type="button"
          onClick={clickHandler || (() => input.onChange(value))}
          className={[
            'group-button',
            currentValue === value ? 'active' : null,
            grayBg ? 'grayBg' : null,
          ].join(' ')}
        >
          {(btnLabels && btnLabels[index]) || upperFirst(value)}
        </button>
      )}
    </div>
  </div>
};

export default ButtonGroup;