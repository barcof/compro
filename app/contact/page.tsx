import type {Metadata} from "next"; import LocalizedLayout from "@/components/LocalizedLayout"; import Maps from "@/components/Maps";
export const metadata:Metadata={title:"Kontak PT Gapura Kencana",description:"Hubungi PT Gapura Kencana melalui WhatsApp atau email dan temukan lokasi Office Cikarang serta Representative Service Center Cilegon.",alternates:{canonical:"/contact/",languages:{id:"/contact/",en:"/en/contact/"}}};
export default function Page(){return <LocalizedLayout lang="id" path="/contact/"><Maps lang="id"/></LocalizedLayout>}
