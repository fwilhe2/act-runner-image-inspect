import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'

async function run(): Promise<void> {
  try {
    const tools = ['node', 'java', 'gcc', 'clang', 'rust']
    const allVersions = tools.map(t => {
      return {
        t: tc.findAllVersions(t)
      }
    })
    core.info(
      `Versions available: ${JSON.stringify(allVersions, undefined, 4)}`
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
