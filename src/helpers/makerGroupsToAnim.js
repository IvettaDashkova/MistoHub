export const makerGroupsToAnim = (data) => {
 const newGroups = [];
 for (let i = 0; i < data.length; i += 20) {
   let group = data.slice(i, i + 20);
   if (group.length < 20 && i + 20 >= data.length) {
     const repeatCount = 20 - group.length;
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
