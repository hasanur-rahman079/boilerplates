import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'projectID',
    dataset: 'production'
  }
})
