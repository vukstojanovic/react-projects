import React, { useEffect } from 'react'

const Alert = ({message, type, hideAlert, groceries}) => {
  useEffect(() => {
    const ticking = setTimeout(() => {
      hideAlert();
    }, 2000)
    return () => {
      clearTimeout(ticking);
    }
  }, [groceries]);
  return <p className={`alert alert-${type}`}>{message}</p>
}

export default Alert
