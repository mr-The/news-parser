import config from '../../server/config'

const sites = Object.keys(config.sites)

const data = {
  sites: sites,
  source: sites[0],
}

export const setSources = () => ({
  type: 'SET_SOURCES',
  payload: data,
})

export const changeSource = (data) => ({
  type: 'CHANGE_SOURCE',
  payload: data,
})
