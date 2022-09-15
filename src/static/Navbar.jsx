import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section class="top-nav">
    <div>
    <h2>DEANNAIGH DESIGN</h2>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
    <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/'>Home</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/about'>About</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/more'>Contact</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/more'><img src="../assets/shopping2.png" alt=""/></NavLink></li>
    </ul>
  </section>
  )
}

export default Navbar