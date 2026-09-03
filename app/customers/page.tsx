import type {Metadata} from "next"; import LocalizedLayout from "@/components/LocalizedLayout"; import CustomersPage from "@/components/CustomersPage";
export const metadata:Metadata={title:"Pelanggan Industri",description:"Daftar perusahaan yang tercantum dalam portofolio pelanggan PT Gapura Kencana.",alternates:{canonical:"/customers/",languages:{id:"/customers/",en:"/en/customers/"}}};
export default function Page(){return <LocalizedLayout lang="id" path="/customers/"><CustomersPage lang="id"/></LocalizedLayout>}
