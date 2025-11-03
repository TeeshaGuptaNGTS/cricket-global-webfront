import React from 'react'
import Membership1 from './_component/membership'
import MembershipBenefit from './_component/membershipBenefit'
import PricingPlan from './_component/pricingplan'
import { Ribbon } from 'lucide-react'
import RibbonOffer from './_component/ribbionoffer'
import SoloMembership from './_component/solomembership'

 function MainMembership(){
  return (
    <>    <Membership1/>
    <PricingPlan/>
    <SoloMembership/>
    <RibbonOffer/>
    <MembershipBenefit/>
    </>

  )
}
export default MainMembership
