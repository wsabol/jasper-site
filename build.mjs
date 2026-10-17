import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const source = new URL(".", import.meta.url);
const output = new URL("./dist/", source);
const contactEmail = process.env.CONTACT_EMAIL || "willsabol@duck.com";

await rm(output, { recursive: true, force: true });
await mkdir(new URL("./privacy/", output), { recursive: true });
await mkdir(new URL("./terms/", output), { recursive: true });

for (const relativePath of ["index.html", "privacy/index.html", "terms/index.html"]) {
  const html = await readFile(new URL(relativePath, source), "utf8");
  await writeFile(new URL(relativePath, output), html.replaceAll("{{CONTACT_EMAIL}}", contactEmail));
}

await cp(new URL("./styles.css", source), new URL("./styles.css", output));
await cp(new URL("./_headers", source), new URL("./_headers", output));
console.log(`Built ${output.pathname} with contact ${contactEmail}`);
