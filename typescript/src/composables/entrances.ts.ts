import * as Path from 'path';

import {ComposableModuleFunction, handlebars} from '@magicspace/core';

import {resolveTypeScriptProjects} from '../library';

import {TEMPLATES_DIR} from './@constants';

const TEMPLATE_PATH = Path.join(TEMPLATES_DIR, '@entrances.ts.hbs');

const composable: ComposableModuleFunction = options => {
  let {projects} = resolveTypeScriptProjects(options);

  return projects.flatMap(project =>
    project.entrances.map(name =>
      handlebars(
        Path.join(project.srcDir, /\.tsx?$/.test(name) ? name : `${name}.ts`),
        {},
        {template: TEMPLATE_PATH},
      ),
    ),
  );
};

export default composable;
