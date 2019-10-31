import axios from 'axios'

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/categories',
  headers: {
    Authorization:
      'Bearer 5bcc3ff8e992ebcbb4dc0bbbd5ab9091'
  }
})
