import type {Metadata} from "next"; import LocalizedLayout from "@/components/LocalizedLayout"; import CustomersPage from "@/components/CustomersPage";
export const metadata:Metadata={title:"Industrial Customers",description:"Companies represented in the PT Gapura Kencana customer portfolio.",alternates:{canonical:"/en/customers/",languages:{id:"/customers/",en:"/en/customers/"}}};
export default function Page(){return <LocalizedLayout lang="en" path="/en/customers/"><CustomersPage lang="en"/></LocalizedLayout>}
