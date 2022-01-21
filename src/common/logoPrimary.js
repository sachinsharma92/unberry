import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from "../assets/logo.svg"

export default function LogoPrimary(props) {
  return (
    <Link to="/" className={`logo-section ${props.className}`}>
      <a>
        <img src={LogoImage} />
      </a>
    </Link>
  )
}
