import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());

  function handleDateSelect(thisDate){
    setStartDate(thisDate);
    console.log(thisDate);
  }
  return (
    <DatePicker 
    selected={startDate} 
    onChange={(date:Date) => handleDateSelect(date)} 
    showTimeSelect
    />
  );
};

export default Example;