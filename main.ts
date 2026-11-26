import { mkdirSync, writeFileSync } from "node:fs";

// The entry: the museum label a museum in the year 3000 puts beside a
// phone charging cable. The curator has never seen one in use, so it reads
// as a ritual whip: plugged into the wall each night to restore the life
// force of the flat, glowing rectangle.
const line =
  "Charging cable. A ritual whip, plugged into the wall each night to restore the life force of the flat, glowing rectangle.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outputPath}`);
