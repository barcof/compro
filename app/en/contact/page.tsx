import type {Metadata} from "next"; import LocalizedLayout from "@/components/LocalizedLayout"; import Maps from "@/components/Maps";
export const metadata:Metadata={title:"Contact PT Gapura Kencana",description:"Contact PT Gapura Kencana by WhatsApp or email and find our Cikarang Office and Cilegon Representative Service Center.",alternates:{canonical:"/en/contact/",languages:{id:"/contact/",en:"/en/contact/"}}};
export default function Page(){return <LocalizedLayout lang="en" path="/en/contact/"><Maps lang="en"/></LocalizedLayout>}
