import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function manifest():MetadataRoute.Manifest{return {name:'Deutschy',short_name:'Deutschy',description:'German practice in Egyptian Arabic and English',start_url:'/',scope:'/',display:'standalone',background_color:'#f6f0e3',theme_color:'#b4432c',icons:[{src:'/icon-192.png',sizes:'192x192',type:'image/png'},{src:'/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'}]};}
