// import React from 'react'
// import PaymentSuccess from './_component/successpage'

// export default function Payment() {
//   return (
//     <PaymentSuccess/>
//      )
// }

import React, { Suspense } from 'react'
import PaymentSuccess from './_component/successpage'

export default function Payment() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading payment details...
      </div>
    }>
       <PaymentSuccess/>
      {/* <PaymentSuccessContent name={name} amount={amount} orderId={orderId} /> */}
    </Suspense>
   
     )
}
