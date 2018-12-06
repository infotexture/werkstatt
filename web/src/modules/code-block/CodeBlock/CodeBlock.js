import React from 'react'
import styled from 'styled-components'
import Editor from 'src/modules/editor'
import Paper from 'src/ui/paper'
import Output from 'src/modules/output'

const Root = styled('div')(({ theme: { spacing } }) => ({
  marginTop: spacing.unit * 2,
  marginBottom: spacing.unit * 2
}))

const CodeBlock = ({ content: { code, output } }) => (
  <Root>
    <Editor code={code} />
    <Paper padding>
      <Output output={output} />
    </Paper>
  </Root>
)

CodeBlock.displayName = 'CodeBlock'

CodeBlock.defaultProps = {
  content: {
    code: "foo = 'Hello world'"
  }
}

export default CodeBlock
