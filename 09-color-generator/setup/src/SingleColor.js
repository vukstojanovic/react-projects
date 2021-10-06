import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

<<<<<<< HEAD
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAlert(false)
  //   }, 3000)
  //   return () => clearTimeout(timeout)
  // }, [alert])



  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        const timeout = setTimeout(() => {
          setAlert(false);
          clearTimeout(timeout);
        }, 3000);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
=======
const SingleColor = ({rgb, weight, index}) => {

  const hexValue = rgbToHex(...rgb);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    }
  }, [isClicked]);

  console.log(navigator.clipboard);

  return (
  <article className={index > 10 ? "color color-light": "color"} style={{backgroundColor: `${hexValue}`}} onClick={() => {
    navigator.clipboard.writeText(hexValue);
    setIsClicked(true);
  }}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {isClicked && <p className="alert">copied to clipboard</p>}
  </article>
)
>>>>>>> ed286138c322b73274162508b59fccc759548f49
}

export default SingleColor