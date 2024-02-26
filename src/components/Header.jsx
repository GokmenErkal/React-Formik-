import React from 'react'

const Header = ({inc}) => {
    console.log("Header comp Re-render!")
  return (
    <div>
      <h1>Header </h1>
        <br /><br />
      <button onClick={inc}>Click</button>
    </div>
  )
}

export default React.memo(Header)