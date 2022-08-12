function arenaTier(arr) {
  let obj = {};

  for (const info of arr) {
    if (info === "Ave Cesar") {
      break;
    }
    let text = info.split(" ");
    if (text[1] === "->") {
      let splitted = info.split(" -> ");
      let gladiator = splitted[0];
      let technique = splitted[1];
      let skill = Number(splitted[2]);
      if (!obj.hasOwnProperty(gladiator)) {
        obj[gladiator] = {};
      }
      if (!obj[gladiator].hasOwnProperty(technique)) {
        obj[gladiator][technique] = skill;
      }
      if (obj[gladiator][technique] < skill) {
        obj[gladiator][technique] = skill;
      }
    }
    if (text[1] === "vs") {
      let splitted = info.split(" vs ");
      let firstGladiator = splitted[0];
      let secondGladiator = splitted[1];

      if (obj.hasOwnProperty(firstGladiator) && obj.hasOwnProperty(secondGladiator)) {
        let firstGladiatorTechnique = obj[firstGladiator];
        let secondGladiatorTechnique = obj[secondGladiator];
        let firstGladiatorKeys = Object.keys(firstGladiatorTechnique);

        for (const technique of firstGladiatorKeys) {
          if (secondGladiatorTechnique.hasOwnProperty(technique)) {
            if (firstGladiatorTechnique[technique] > secondGladiatorTechnique[technique]) {
              delete obj[secondGladiator];
            } else {
              delete obj[firstGladiator];
            }
          }
        }
      }
    }
  }
  let gladiators = Object.entries(obj);
  let arena = [];
  console.log(gladiators);
  
  for (const gladiator of gladiators) {
    let gladiatorName = gladiator[0];
    let gladiatorTechniques = Object.entries(gladiator[1]);
    let totalSkill = gladiatorTechniques
      .map((n) => n[1])
      .reduce((a, b) => a + b, 0);
    arena.push([gladiatorName, gladiatorTechniques, totalSkill]);
  }
  arena.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));

  for (const skills of arena) {
    console.log(`${skills[0]}: ${skills[2]} skill`);
    skills[1]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach((gladiator) => console.log(`- ${gladiator[0]} <!> ${gladiator[1]}`));
  }
}

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);

// let sortedEntries = Object.entries(skills);
// sortedEntries.sort((a, b) => b.totalSkill - a.totalSkill);
// // sortedEntries.sort((a, b) => b[1] - a[1]).sort((a, b) => );
// console.log(sortedEntries);
//     // console.log(`${gladiator}: ${totalSkill} skill`);

// "{gladiator} -> {technique} -> {skill}"
