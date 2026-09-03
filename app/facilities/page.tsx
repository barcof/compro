import type {Metadata} from "next"; import LocalizedLayout from "@/components/LocalizedLayout"; import FacilitiesPage from "@/components/FacilitiesPage";
export const metadata:Metadata={title:"Fasilitas Workshop & Produksi",description:"Fasilitas workshop PT Gapura Kencana untuk mendukung pekerjaan repair dan rekondisi Mechanical Seal.",alternates:{canonical:"/facilities/",languages:{id:"/facilities/",en:"/en/facilities/"}}};
export default function Page(){return <LocalizedLayout lang="id" path="/facilities/"><FacilitiesPage lang="id"/></LocalizedLayout>}
