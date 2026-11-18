import type {ReactNode} from 'react';
import Mixed from './Mixed';
// An allowlist, not an HTML/Markdown engine. Everything else stays escaped React text.
function inline(text:string):ReactNode[]{
 const nodes:ReactNode[]=[];const pattern=/(`[^`\n]+`|\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*)/g;let last=0,key=0;
 for(const match of text.matchAll(pattern)){const index=match.index??0;if(index>last)nodes.push(<Mixed key={key++} text={text.slice(last,index)}/>);const token=match[0];
  if(token.startsWith('`'))nodes.push(<code key={key++} className="rounded bg-paper px-1"><Mixed text={token.slice(1,-1)}/></code>);
  else if(token.startsWith('**')||token.startsWith('__'))nodes.push(<strong key={key++}><Mixed text={token.slice(2,-2)}/></strong>);
  else nodes.push(<em key={key++}><Mixed text={token.slice(1,-1)}/></em>);
  last=index+token.length;
 }if(last<text.length)nodes.push(<Mixed key={key++} text={text.slice(last)}/>);return nodes;
}
export default function HelperAnswer({text}:{text:string}){
 return <div className="space-y-2">{text.split(/\r?\n/).map((line,index)=>{const first=line.match(/\p{L}/u)?.[0]??'';const direction=/[\u0590-\u08ff]/.test(first)?'rtl':'ltr';return <p key={index} dir={direction} className="min-w-0 whitespace-pre-wrap break-words [text-align:start]" data-helper-line>{inline(line.replace(/^\s*#{1,6}\s+/,'').replace(/^\s*\*\s+/,'- '))}</p>})}</div>;
}
