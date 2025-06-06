export function transformToMLD(mcd) {
  const mld = mcd.entities.map(entity => ({
    name: entity.name,
    attributes: entity.attributes.map((a, i) => i === 0 ? a + " (PK)" : a)
  }));

  mcd.relations.forEach(relation => {
    if (relation.type === "1-N") {
      const target = mld.find(t => t.name === relation.to);
      const fk = relation.from.toLowerCase() + "_id (FK)";
      if (target && !target.attributes.includes(fk)) {
        target.attributes.push(fk);
      }
    }
  });

  return mld;
}

export function transformToMPD(mld) {
  return mld.map(table => {
    const lines = table.attributes.map(attr => {
      const base = attr.replace(" (PK)", "").replace(" (FK)", "");
      let type = "VARCHAR(100)";
      if (base.toLowerCase().includes("id")) type = "INT";
      let suffix = "";
      if (attr.includes("PK")) suffix += " PRIMARY KEY";
      if (attr.includes("FK")) suffix += " FOREIGN KEY";
      return `  ${base} ${type}${suffix}`;
    });
    return `CREATE TABLE ${table.name} (
${lines.join(",
")}
);`;
  }).join("\n\n");
}