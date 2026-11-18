/** Curated after viewing every displayed verb photo, 2026-11-18.
 * Objects, buildings and locations are not evidence of an action.
 * Unknown verbs deliberately get a neutral SVG tile, never their legacy img hint.
 */
export const verbPhotos:Readonly<Record<string,string>>=Object.freeze({
 spielen:'fussball', // People visibly playing football, not merely a ball.
 fliegen:'flugzeug', // Airplane visibly airborne, not a parked aircraft.
});
export function verifiedVerbPhoto(inf:string):string|null{return Object.hasOwn(verbPhotos,inf)?verbPhotos[inf]:null;}
