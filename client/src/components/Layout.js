import React from 'react'
import { SLayout,SMain } from './styles'
import Sidebar from './Sidebar/Sidebar';

export const Layout = ({children, name}) => {
  return ( 

    <SLayout>
     
        <Sidebar name = {name}/>
        <SMain>{children}</SMain>
        
    </SLayout>
    )
}

