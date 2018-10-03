import React from 'react'

function AppLayout(props){
  return(
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}

export default AppLayout