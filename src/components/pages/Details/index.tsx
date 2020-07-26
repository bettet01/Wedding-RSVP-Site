import "./index.css";
import React, { useEffect, useState } from "react";
import ReactMomentCountDown from "react-moment-countdown";
import moment from 'moment';

const Details = () => {  
  return (
    <div>
      <ReactMomentCountDown style={{color: 'white'}} toDate={moment('Sat 21 Aug 2021 16:00:00')} targetFormatMask='MM:DD:HH:mm:ss' />
    </div>
  );
};

export default Details;
