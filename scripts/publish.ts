import path from "node:path";
import fs from "fs-extra";
import packageJson from "../package.json";
import { cwd } from "./utils/env";

const MONO_REPO_PATHS = [
  path.join(cwd, "packages/components"),
  path.join(cwd, "packages/libs"),
  path.join(cwd, "packages/react"),
  path.join(cwd, "packages/tailwind"),
  path.join(cwd, "apps/storybook"),
  path.join(cwd, "scripts"),
];

const PACKAGE_JSON_PATH = path.join(cwd, "package.json");

// publish
async function resolvePublish() {
  const flag = process.argv[2] ?? "patch";

  let [a, b, c] = packageJson.version.split(".").map(Number);

  if (flag === "major") {
    a += 1;
    b = 0;
    c = 0;
  } else if (flag === "minor") {
    b += 1;
    c = 0;
  } else if (flag === "patch") {
    c += 1;
  } else throw new Error(`invalid flag "${flag}"`);

  const nextVersion = `${a}.${b}.${c}`;
  packageJson.version = nextVersion;

  await fs.writeJSON(PACKAGE_JSON_PATH, packageJson, {
    spaces: 2,
  });

  // overrides mono repo package.json
  for (const monoRepoPath of MONO_REPO_PATHS) {
    const monoRepoPackageJsonPath = path.join(monoRepoPath, "package.json");
    const monoRepoPackageJson = await fs.readJSON(monoRepoPackageJsonPath);
    monoRepoPackageJson.version = nextVersion;
    await fs.writeJSON(monoRepoPackageJsonPath, monoRepoPackageJson, {
      spaces: 2,
    });
  }

  console.log(nextVersion);
}

resolvePublish();
