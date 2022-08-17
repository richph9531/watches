import React from 'react';

const TimeOnWatch = () => {
  const current = new Date();
  const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  return (
    <div className='TimeOnWatch'>
      <h1>Current time is {time}</h1>
    </div>
  );
};

export default TimeOnWatch;

