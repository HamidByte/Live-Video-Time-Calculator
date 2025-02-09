// Returns the simplified aspect ratio of given width and height.
export function simpleAspectRatio(width, height) {
  const scale = 100 // Adjust this to increase precision
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

  const w = Math.round(width * scale)
  const h = Math.round(height * scale)
  const divisor = gcd(w, h)

  return `${w / divisor}:${h / divisor}`
}

// Calculates the nearest normal aspect ratio based on given dimensions and maximum limits.
export function nearestNormalAspectRatio(width, height, side, maxW = 16, maxH = 16) {
  const ratio = (width * 100) / (height * 100);
  const ratiosW = new Array(maxW).fill(0);
  const ratiosH = new Array(maxH).fill(0);
  const ratiosT = {};
  const ratios = {};
  let match;

  ratiosW.forEach((_, ratioW) => {
    ratiosH.forEach((_, ratioH) => {
      const ratioX = ((ratioW + 1) * 100) / ((ratioH + 1) * 100);

      if (!ratiosT[ratioX]) {
        ratiosT[ratioX] = true;
        ratios[`${ratioW + 1}:${ratioH + 1}`] = ratioX;
      }
    });
  });

  for (const key in ratios) {
    if (
      !match ||
      (!side && Math.abs(ratio - ratios[key]) < Math.abs(ratio - ratios[match])) ||
      (side < 0 && ratios[key] <= ratio && Math.abs(ratio - ratios[key]) < Math.abs(ratio - ratios[match])) ||
      (side > 0 && ratios[key] >= ratio && Math.abs(ratio - ratios[key]) < Math.abs(ratio - ratios[match]))
    ) {
      match = key;
    }
  }

  return match;
}
