import type {Metadata} from "next"; import LocalizedLayout from "@/components/LocalizedLayout"; import FacilitiesPage from "@/components/FacilitiesPage";
export const metadata:Metadata={title:"Workshop & Production Facilities",description:"PT Gapura Kencana workshop facilities supporting Mechanical Seal repair and reconditioning work.",alternates:{canonical:"/en/facilities/",languages:{id:"/facilities/",en:"/en/facilities/"}}};
export default function Page(){return <LocalizedLayout lang="en" path="/en/facilities/"><FacilitiesPage lang="en"/></LocalizedLayout>}
