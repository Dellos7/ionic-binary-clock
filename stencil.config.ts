import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'binary-clock',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle: 'src/global/app.css'
};
