"use client";
import Image from "next/image";
type Props={title:string;image:string;category:string};
export default function Gallery({images}:{images?:Props[]|null}){const items=images?.length?images:[];return <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((item,index)=><figure key={`${item.image}-${index}`} className="overflow-hidden rounded-2xl border bg-background shadow-sm"><div className="relative aspect-[4/3] bg-secondary"><Image src={`/uploads/${item.category}/${item.image}`} alt={item.title} fill className="object-cover" priority={index<3}/></div><figcaption className="p-4 text-center font-semibold text-primary">{item.title}</figcaption></figure>)}</div>}
