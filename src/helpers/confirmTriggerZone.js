export const confirmTriggerZone = (
  index,
  rectEl,
  rectContainer,
  mobile,
  tablet
) => {
  switch (index) {
    case 0:
      return (
        rectEl.left <= rectContainer.left + (mobile ? 40 : tablet ? 80 : 200) ||
        rectEl.left >= rectContainer.right - (mobile ? 80 : tablet ? 180 : 400)
      );
    case 1:
      return (
        rectEl.right <=
          rectContainer.left + (mobile ? 50 : tablet ? 90 : 170) ||
        rectEl.right >= rectContainer.right - (mobile ? -30 : tablet ? -40 : 10)
      );
    case 2:
      return (
        rectEl.left <=
          rectContainer.left + (mobile ? -30 : tablet ? -40 : 10) ||
        rectEl.left >= rectContainer.right - (mobile ? 50 : tablet ? 90 : 170)
      );
    case 3:
      return (
        rectEl.right <=
          rectContainer.left + (mobile ? 80 : tablet ? 180 : 400) ||
        rectEl.right >= rectContainer.right - (mobile ? 40 : tablet ? 80 : 200)
      );
    default:
      false;
      break;
  }
};
