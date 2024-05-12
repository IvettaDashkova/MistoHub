export const confirmTriggerZone = (
  index,
  rectEl,
  rectContainer,
  mobile,
  tablet,
  data
) => {
  const isOddGroup = index % 2 === 0;
  const isLastGroup = index === data.length - 1;

  let res = false;

  if (isOddGroup) {
    res =
      index === 0 || isLastGroup
        ? rectEl.left <=
            rectContainer.left + (mobile ? 40 : tablet ? 80 : 200) ||
          rectEl.left >=
            rectContainer.right - (mobile ? 80 : tablet ? 180 : 400)
        : rectEl.right <=
            rectContainer.left + (mobile ? 50 : tablet ? 90 : 170) ||
          rectEl.right >=
            rectContainer.right - (mobile ? -30 : tablet ? -40 : 10);
  } else {
    res = isLastGroup
      ? rectEl.right <=
          rectContainer.left + (mobile ? 80 : tablet ? 180 : 400) ||
        rectEl.right >= rectContainer.right - (mobile ? 40 : tablet ? 80 : 200)
      : rectEl.right <=
          rectContainer.left + (mobile ? 50 : tablet ? 90 : 170) ||
        rectEl.right >=
          rectContainer.right - (mobile ? -30 : tablet ? -40 : 10);
  }

  return res;
};
