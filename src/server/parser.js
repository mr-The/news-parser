import * as cheerio from 'cheerio'
import axios from 'axios'

const proxyurl = 'https://fierce-bayou-16728.herokuapp.com/'

export const parsePost = async (url, postClasses) => {
  return new Promise((resolve, reject) => {
    axios
      .get(proxyurl + url)
      .then(({ data }) => {
        const $ = cheerio.load(data)

        const domain = url.match(/\/\/(.*?)\//)[1]
        const createDate = $(postClasses.createDate).text()
        const title = $(postClasses.title).text().trim()
        let image = $(postClasses.image).attr('src')
        image =
          image && image.indexOf('https') >= 0
            ? image
            : `https://${domain}${image}`
        const text = $(postClasses.text).text().trim()

        const post = { createDate, title, image, text, url }
        resolve(post)
      })
      .catch((e) => console.log(e))
  })
}

export const parseLink = async (url, linkClasses, maxQuery) => {
  return new Promise((resolve, reject) => {
    axios
      .get(proxyurl + url)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const domain = url.match(/\/\/(.*?)\//)[1]
        let links = []

        maxQuery = !maxQuery ? (maxQuery = $(linkClasses).length) : maxQuery

        $(linkClasses).each((i, el) => {
          if (i < maxQuery) {
            let link = $(el).attr('href')
            link =
              link && link.indexOf('./') >= 0
                ? link.replace('./', '/news/')
                : link
            link =
              link && link.indexOf('https') >= 0
                ? link
                : `https://${domain}${link}`

            links.push(link)
          }
        })
        resolve(links)
      })
      .catch((e) => console.log(e))
  })
}

export const fetchPosts = async (links, postClasses) => {
  const posts = []
  for (let i = 0; i < links.length; i++) {
    const post = await parsePost(links[i], postClasses)
      .then((data) => data)
      .catch((e) => console.log(e))
    posts.push(post)
    setTimeout(() => {}, 1000)
  }
  return posts
}
