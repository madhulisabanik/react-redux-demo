import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {

  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  const [value, setValue] = useState(1)

  return (
    <div>
      <h2>Number of Ice creams - { numOfIcecreams }</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <div>
        <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
      </div>
    </div>
  )
}

export default IcecreamView
