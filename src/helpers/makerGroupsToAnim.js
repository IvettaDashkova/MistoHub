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
    const randomIndex = Math.floor(
      Math.random() * Array.from(uniqueElements).length
    );
    const isRandomElInGroup = lastGroup.some(
      (person) => person.id === Array.from(uniqueElements)[randomIndex].id
    );
    !isRandomElInGroup &&
      lastGroup.push(Array.from(uniqueElements)[randomIndex]);
  }

  console.log('newData: ', newData);
  return newData;
};
