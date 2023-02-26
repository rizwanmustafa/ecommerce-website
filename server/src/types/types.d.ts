declare namespace Types{

  
  interface Env extends NodeJS.ProcessEnv {
    PORT: number | undefined;
    MODE: "dev" | "prod" | undefined;
  }
}