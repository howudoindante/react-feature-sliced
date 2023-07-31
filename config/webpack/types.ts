export interface WebpackEnv {
    mode?: 'production' | 'development';
    stats?: 'true' | 'false';
    port?: number;
}

export interface WebpackConfigurationData {
    stats: boolean;
    mode: 'production' | 'development';
    port: number;
    HTML_PATH: string;
    OUTPUT_PATH: string;
    ENTRY_PATH: string;
    isDev: boolean;
}
