import { Suspense } from "react";
import Membership1 from "./_component/membership";
import MembershipBenefit from "./_component/membershipBenefit";
import ProtectedRoute from "@/component/protectroute";
import PricingSection from "./_component/pricingplan";
import News from "../home/_component/news";
// import MainMembership from "./mainmembership";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <>
      <Membership1 />
      <MembershipBenefit />
      <ProtectedRoute>
      <PricingSection/>
      </ProtectedRoute>
      {/* <RibbonOffer /> */}
      <News/>
    </>
    </Suspense>
  );
}
