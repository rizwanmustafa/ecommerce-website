import Logger from "./logger";

const envKeys = ["MODE", "PORT"];

export function ValidateEnv(): void {
  const env = process.env as Types.Env;
  let count = 0;

  envKeys.forEach((key) => {
    if (!env[key]) {
      Logger.warning(`Environment variable "${key}" is not set!`)
      count += 1;
    }
  });

  if (count > 0) {
    Logger.error(`Exiting server due to missing environment variables!`);
    process.exit(1);
  }
  else {
    Logger.success(`Environment variables are set!`);
  }
}

export function GetServerMode(): "dev" | "prod" {
  const envMode = (process.env as Types.Env).MODE;

  if (envMode && envMode.trim() == "prod") return "prod";

  return "dev";
}

export function GetServerPort(): number {
  return (process.env as Types.Env).PORT ?? 5000;
}