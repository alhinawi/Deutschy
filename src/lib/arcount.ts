// Arabic count phrases: 0 and 11+ singular accusative form, 1 singular, 2 dual, 3-10 plural.
export function arCount(n: number, one: string, two: string, few: string, many = one): string {
  if (n === 1) return one;
  if (n === 2) return two;
  if (n >= 3 && n <= 10) return `${n} ${few}`;
  return `${n} ${many}`;
}
export const arWords = (n: number) => arCount(n, 'كلمة', 'كلمتين', 'كلمات', 'كلمة');
export const arLessons = (n: number) => arCount(n, 'درس', 'درسين', 'دروس', 'درس');
export const arTopics = (n: number) => arCount(n, 'موضوع', 'موضوعين', 'مواضيع', 'موضوع');
export const arVerbs = (n: number) => arCount(n, 'فعل', 'فعلين', 'أفعال', 'فعل');
export const arTries = (n: number) => arCount(n, 'محاولة', 'محاولتين', 'محاولات', 'محاولة');
