import { fetchLatestInvoices } from "@/app/lib/data";

export default async function page() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div>Invoices Page</div>
  )
}
