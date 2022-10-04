import mongoose from "mongoose"

const {Schema} = mongoose

const blogSchema = new Schema(
    {
        title: String,
        author: String,
        body: String,
        slug: String,
        published: Boolean
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog