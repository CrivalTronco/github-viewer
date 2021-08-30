import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { FaInfoCircle } from 'react-icons/fa';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className="bg-red-900 z-10 flex p-4 items-center mx-4 mt-2 rounded">
        <FaInfoCircle className="mr-2"/> {alert.msg}
      </div>
    )
  );
};

export default Alert;
