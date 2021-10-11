import { Button, Header, Icon } from 'semantic-ui-react'

const toUpperFirstLetter = (string = '') => {
  return string[0].toUpperCase() + string.slice(1)
}

const SiteHeader = ({ source = '', sites, handleChangeSource, className }) => (
  <Header as="h2" className={className}>
    Сайт: {source && toUpperFirstLetter(source)}
    <div className="button-group">
      <Button.Group basic>
        {sites &&
          sites &&
          sites.map((site) => (
            <Button
              key={site}
              icon
              labelPosition="left"
              active={source === site}
              onClick={() => {
                handleChangeSource(site)
              }}
            >
              <Icon name="world" />
              {toUpperFirstLetter(site)}
            </Button>
          ))}
      </Button.Group>
    </div>
  </Header>
)

export default SiteHeader
