import { mkdirSync, writeFileSync } from "node:fs";

// The entry: the museum label a museum in the year 3000 puts beside a
// phone charging cable. The curator has never seen one in use, so it reads
// as a ritual whip: plugged into the wall each night to restore the life
// force of the flat, glowing rectangle.
//
// The label is built from two named parts so the joke's structure is
// visible in code: the artifact being labelled, and the curator's
// misreading of what it was for. Joined as "<artifact>. <misreading>",
// which is the entire text of the museum label.
const ARTIFACT = "Charging cable";
const CURATOR_MISREADING =
  "A ritual whip, plugged into the wall each night to restore the life force of the flat, glowing rectangle.";
const MUSEUM_LABEL = `${ARTIFACT}. ${CURATOR_MISREADING}`;

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, MUSEUM_LABEL, "utf8");
console.log(`Wrote ${MUSEUM_LABEL.length} characters to ${outputPath}`);
