import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

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
}

export default SingleColor
