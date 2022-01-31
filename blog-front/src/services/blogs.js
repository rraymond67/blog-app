import api from './apiConfig'

export const getProducts = async () => {
  try {
      const response = await api.get('/blogs')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getProduct = async id => {
  try {
      const response = await api.get(`/blogs/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createProduct = async product => {
  try {
      const response = await api.post('/blogs', product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateProduct = async (id, product) => {
  try {
      const response = await api.put(`/blogs/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const response = await api.delete(`/blogs/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}