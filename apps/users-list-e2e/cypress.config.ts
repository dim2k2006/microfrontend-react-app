import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run users-list:serve',
        production: 'nx run users-list:preview',
      },
      ciWebServerCommand: 'nx run users-list:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
