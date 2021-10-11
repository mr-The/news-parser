import { Loader, Placeholder } from 'semantic-ui-react'

const LoaderBlock = ({ text }) => (
  <div className="loader-block">
    <Placeholder fluid>
      <Placeholder.Header>
        <Placeholder.Line length="full" />
        <Placeholder.Line length="full" />
        <Placeholder.Line length="full" />
        <Loader active size="large" />
      </Placeholder.Header>
    </Placeholder>
    <p style={{ textAlign: 'center', color: 'teal' }}>{text}</p>
  </div>
)

export default LoaderBlock
