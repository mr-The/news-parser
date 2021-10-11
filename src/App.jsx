import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item, Container } from 'semantic-ui-react'

import { changeSource, setSources } from './redux/actions/sources'
import { fetchPosts } from './redux/actions/posts'

import SiteHeader from './components/Header'
import Post from './components/Post'
import LoaderBlock from './components/LoaderBlock'

function App() {
  const dispatch = useDispatch()
  const { sites = [], source } = useSelector((store) => store.sources)
  const { posts = [] } = useSelector((store) => store)
  const items = posts[source] || []

  const uploading = posts.uploading

  useEffect(() => {
    dispatch(setSources())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchPosts(source))
  }, [dispatch, source])

  const handleChangeSource = (site) => {
    dispatch(changeSource(site))
  }

  return (
    <Container>
      <div className="App">
        {sites.length && (
          <SiteHeader
            className={uploading ? 'p-static' : ''}
            source={source}
            sites={sites}
            handleChangeSource={handleChangeSource}
          />
        )}
        <Item.Group divided>
          {!items.length ? (
            <LoaderBlock text="Загрузка ..." />
          ) : (
            <>
              {uploading ? <LoaderBlock text="Обновление ..." /> : ''}
              {items.map((post) => (
                <Post
                  key={post.title}
                  title={post.title}
                  description={post.text}
                  image={post.image}
                  createDate={post.createDate}
                  url={post.url}
                />
              ))}
            </>
          )}
        </Item.Group>
      </div>
    </Container>
  )
}

export default App
