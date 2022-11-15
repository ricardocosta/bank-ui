export interface AppGeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
  e2e?: boolean;
  restServer?: boolean;
}
