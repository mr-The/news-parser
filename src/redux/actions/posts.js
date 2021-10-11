import getPosts from '../../server'

export const fetchPosts = (site) => (dispatch) => {
  const oldPosts = localStorage.getItem(site)

  let newData = JSON.parse(oldPosts) || {}

  dispatch(setUploading(true))
  newData && dispatch(setPosts({ site, newData }))

  const fetchData = async () => {
    dispatch(setUploading(true))
    let data = await getPosts(site)

    if (Object.keys(newData).length) {
      data = data.reverse()
      data.forEach((post) => {
        if (!oldPosts.includes(JSON.stringify(post))) {
          newData.unshift(post)
        }
      })
    } else {
      newData = data
    }

    newData = newData.length > 15 ? newData.slice(0, 15) : newData

    localStorage.setItem(site, JSON.stringify(newData))
    localStorage.setItem(`${site}-uploadTime`, JSON.stringify(Date.now()))

    dispatch(setPosts({ site, newData }))
  }

  if (Date.now() - localStorage.getItem(`${site}-uploadTime`) > 21600000) {
    fetchData()
  }
}

export const setUploading = (upload) => ({
  type: 'SET_UPLOADING',
  payload: upload,
})

export const setPosts = (data) => ({
  type: 'SET_POSTS',
  payload: data,
})
