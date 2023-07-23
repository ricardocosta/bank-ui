declare module "rollup-plugin-exclude-dependencies-from-bundle" {
  interface PluginOpts {
    peerDependencies: boolean;
    dependencies: string[];
  }

  type ExternalOption = (string | RegExp)[] | string | RegExp | ExternalOptionFn;

  type ExternalOptionFn = (
    source: string,
    importer: string | undefined,
    isResolved: boolean
  ) => boolean | null | undefined | void;

  interface PluginReturn {
    name: string;
    options: (opts: { external?: ExternalOption }) => PluginReturnOptions;
  }

  interface PluginReturnOptions {
    external: ExternalOptionFn;
  }

  export function index(options?: PluginOpts): PluginReturn;
  export default index;
}
