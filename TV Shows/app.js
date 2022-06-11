const form = document.querySelector('#searchForm')
const resultBlock = document.querySelector('#resultBlock')

form.addEventListener('submit', async function (e) {
  e.preventDefault()
  removeResult()

  const searchTerm = form.elements.query.value
  const config = { params: { q: searchTerm } }
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
  form.elements.query.value = ''

  makeResult(res.data)
})

const makeResult = shows => {
  for (let result of shows) {
    if (result.show.image) {
      const link = document.createElement('a')
      link.href = result.show.url
      link.target = '_blank'

      const img = document.createElement('img')
      img.src = result.show.image.original

      resultBlock.append(link)
      link.append(img)
    }
  }
}


const removeResult = function() {
  const links = document.querySelectorAll('a')
  for( let link of links) {
    link.remove()
  }
}