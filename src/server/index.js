import config from './config.js'
import { fetchPosts, parseLink } from './parser.js'

async function getPosts(source, maxQuery) {
  const Posts = async (source, maxQuery) => {
    const links = await parseLink(
      config.sites[source],
      config.linkClasses[source],
      maxQuery
    )
      .then((data) => data)
      .catch((e) => console.log(e))

    const posts = await fetchPosts(links, config.postClasses[source])

    return posts
  }

  let posts = await Posts(source, maxQuery)
  return posts
}

export default getPosts
