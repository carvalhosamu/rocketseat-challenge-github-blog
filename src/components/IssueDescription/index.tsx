import SyntaxHighlighter from 'react-syntax-highlighter'
import { Markdown } from './styles'
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownNode {
  text: string
}

export function IssueDescription(props: MarkdownNode) {
  return (
    <Markdown
      components={{
        code({ node, inline, className, children, style, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              style={theme}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {props.text}
    </Markdown>
  )
}
