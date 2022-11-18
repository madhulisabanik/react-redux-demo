import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {

  // useSelector is use to render data from state. it is a function that receives state as a parameter and returns the value returned by it's argument
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)

  // useDispatch is used to dispatch any action from redux store
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Cakes - { numOfCakes }</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView
