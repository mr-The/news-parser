const config = {
  postClasses: {
    donland: {
      createDate: '.news-detail__date',
      title: '.news-detail__column.news-detail__column--left h1',
      image: '.js-photo img',
      text: '.news-detail__detail p',
    },
    donnews: {
      createDate: '.article__date',
      title: '.article__title',
      image: '.article__picture img',
      text: '.article__content p',
    },
    batayskGorod: {
      createDate: '.news-detail.simple .detail__date',
      title: '.detail-name',
      image: '.detail__picture',
      text: '.js-mediator-article p',
    },
  },
  sites: {
    donland: 'https://www.donland.ru/news/',
    donnews: 'https://www.donnews.ru/archive/1/',
    batayskGorod: 'https://bataysk-gorod.ru/novosti-batayska/',
  },
  linkClasses: {
    donland: '.list__items .list__item-body a.list__item-link',
    donnews: '.catalog__shell a',
    batayskGorod: '.detail__full .line .line__item',
  },
}

export default config
