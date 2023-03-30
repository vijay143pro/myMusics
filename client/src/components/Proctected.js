import React from 'react'
import {Route,Redirect} from 'react-router-dom'
function Proctected({components,...rest}) {
 var RenderComponents=components;
  return (
        <Route
        {...rest}
        render={
            props=>{
                true?(
                    <RenderComponents {...props}/>
                ):
                (
                        <Redirect to={{
                            pathname:'/login'
                        }}></Redirect>
                )
            }
        }
        />
  )
}

export default Proctected