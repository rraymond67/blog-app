import Product from '../models/user.js'


export const getBlogs = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getBlog = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      return res.json(product)
    }
    res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createBlog = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateBlog = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(product)
}

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Product deleted')
    }
    throw new Error('Product not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
