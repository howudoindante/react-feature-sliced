export interface WebpackEnv {
  mode?: "production" | "development";
  port?: number;
}

export interface WebpackConfigurationData {
  mode: "production" | "development";
  port: number;
  HTML_PATH: string;
  OUTPUT_PATH: string;
  ENTRY_PATH: string;
  isDev: boolean;
}
