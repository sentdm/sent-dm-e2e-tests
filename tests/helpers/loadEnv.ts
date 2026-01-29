import fs from "fs";
import path from "path";

function parseEnv(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  const lines = content.split(/\r?\n/);
  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith("#")) continue;
    // support lines like "export KEY=VALUE"
    if (line.startsWith("export ")) line = line.replace(/^export\s+/, "");
    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) continue;
    const key = line.substring(0, eqIndex).trim();
    let val = line.substring(eqIndex + 1).trim();
    // remove surrounding quotes if present
    if ((val.startsWith("\"") && val.endsWith("\"")) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    result[key] = val;
  }
  return result;
}

export function loadEnv(envName?: string) {
  const name = envName || process.env.TEST_ENV || process.env.NODE_ENV || "dev";
  const cwd = process.cwd();
  const candidates = [
    path.resolve(cwd, ".env"),
    path.resolve(cwd, `.env.${name}`),
    // allow .env.local and per-env local overrides
    path.resolve(cwd, ".env.local"),
    path.resolve(cwd, `.env.${name}.local`)
  ];

  for (const filePath of candidates) {
    try {
      if (!fs.existsSync(filePath)) continue;
      const content = fs.readFileSync(filePath, "utf8");
      const parsed = parseEnv(content);
      for (const [k, v] of Object.entries(parsed)) {
        // do not override existing environment variables set outside the file
        if (typeof process.env[k] === "undefined") {
          process.env[k] = v;
        }
      }
    } catch (err) {
      // swallow errors — loader should be best-effort
    }
  }
}

// Auto-load on import so requiring this module is enough
loadEnv();

export default loadEnv;
