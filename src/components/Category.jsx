import React from 'react'
import styles from './Category.module.css'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <div className={styles.list}>
      <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </Slink>
    </div>
  )
}

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`

export default Category
