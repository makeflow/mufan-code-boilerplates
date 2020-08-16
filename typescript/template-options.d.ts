/// <reference path="../general/template-options.d.ts" />

declare namespace Magicspace {
  interface TemplateOptions {
    tsProjects?: TemplateOptions.TypeScriptProjectOptions[];
  }

  namespace TemplateOptions {
    interface PackageOptions {
      tsProjects?: TypeScriptProjectOptions[];
    }

    interface TypeScriptProjectOptions {
      name: string;
      /**
       * Default directory inside its parent package, defaults to the project
       * name.
       */
      dir?: string;
      /**
       * Is this TypeScript project a library or program? Defaults to 'library'
       * if project name is 'library', otherwise 'program'.
       *
       * If the type is specified as 'script', the project will output to
       * `.bld-cache` instead of 'bld'.
       */
      type?: 'library' | 'program' | 'script';
      /**
       * Is this TypeScript project a development-time project? Defaults to
       * true if the project name is 'test', otherwise false.
       */
      dev?: boolean;
    }
  }
}
