export const makerGroupsToAnim = (data) => {
 const newGroups = [];
 for (let i = 0; i < data.length; i += 25) {
   let group = data.slice(i, i + 25);
   if (group.length < 25 && i + 25 >= data.length) {
     const repeatCount = 25 - group.length;
     group = [
       ...group,
       ...Array.from(
         { length: repeatCount },
         (_, index) => group[index % group.length]
       ),
     ];
   }

   newGroups.push(group);
 }

  return newGroups;
};
