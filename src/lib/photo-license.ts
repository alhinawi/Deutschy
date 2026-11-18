/** Link only exact supported photo-license labels; unknown labels remain plain text. */
export function photoLicenseUrl(label: string): string | undefined {
  const cc = /^CC (BY|BY-SA) (2\.0|2\.5|3\.0|4\.0)$/.exec(label);
  if (cc) return `https://creativecommons.org/licenses/${cc[1].toLowerCase()}/${cc[2]}/`;
  if (label === 'CC0') return 'https://creativecommons.org/publicdomain/zero/1.0/';
  return undefined;
}
