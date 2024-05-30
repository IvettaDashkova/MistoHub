export const makerAnimParams = (length, desktop, tablet) => {
  if (!length) return;

  const overallWidthList = length * (desktop || tablet ? 212 : 92);

  const visibleZoneWidth = desktop ? 1440 : tablet ? 768 : 375;

  const distanceToMoveX = overallWidthList * 2 - visibleZoneWidth; // use a multiplier if you duplicate your data for rendering
  const speedAnimation = desktop ? 34.2 : tablet ? 68.2 : 29.6; // px/sec

  return {
    start: 0,
    end: -distanceToMoveX,
    time: distanceToMoveX / speedAnimation,
  };
};
