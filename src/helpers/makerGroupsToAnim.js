export const makerGroupsToAnim = (data) => {
  const newData = [];
  let uniqueElements = new Set();

  for (let i = 0; i < data.length; i += 25) {
    const group = data.slice(i, i + 25);
    newData.push(group);
    group.forEach((person) => uniqueElements.add(person));
  }

  const lastGroup = newData[newData.length - 1];

  while (lastGroup?.length < 25) {
    const arrUniqueEl = Array.from(uniqueElements);
    const randomIndex = Math.floor(Math.random() * arrUniqueEl.length);
    const randomElNotUnique = lastGroup.some(
      (person) => person.id === arrUniqueEl[randomIndex].id
    );
    !randomElNotUnique && lastGroup.push(arrUniqueEl[randomIndex]);
  }

  return newData;
};
