export function practiceOptionOrder(key:string,id:string){let seed=0;for(const c of key+id)seed=(seed*31+c.charCodeAt(0))>>>0;return [[0,1,2],[1,2,0],[2,0,1],[0,2,1],[1,0,2],[2,1,0]][seed%6]}
