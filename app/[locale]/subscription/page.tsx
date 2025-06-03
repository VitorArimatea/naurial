import { PricingTable } from "@clerk/nextjs"

function Subscription() {
  return (
    <main className="p-8">
      <h1>Plans</h1>
      <PricingTable />
    </main>
  )
}
export default Subscription