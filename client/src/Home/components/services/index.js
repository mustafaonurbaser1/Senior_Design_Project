import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-4.svg'
import { ServicesContainer,ServicesH1,ServicesCard,ServicesH2,ServicesIcon,ServicesWrapper,ServicesP} from './ServicesElements';
function Services() {
  return (
     <ServicesContainer id = "services">
         <ServicesH1> Our Services</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
                 <ServicesIcon src= {Icon1}/>
                 <ServicesH2>Add Todos</ServicesH2>
                    <ServicesP> Add your todos and focus other things not remembering.
                        
                    </ServicesP>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcon src= {Icon2}/>
                 <ServicesH2>Add and Join Events</ServicesH2>
                    <ServicesP> Begin events or join events and meet people with same hobby.
                    </ServicesP>
             </ServicesCard>

         </ServicesWrapper>
     </ServicesContainer>
  )
}

export default Services