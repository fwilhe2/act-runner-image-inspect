import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'

async function run(): Promise<void> {
  try {
    const tools = ['node', 'java', 'gcc', 'clang', 'rust']
    for (const t of tools) {
      core.info(`Tool ${t} versions: ${tc.findAllVersions(t)}`)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
