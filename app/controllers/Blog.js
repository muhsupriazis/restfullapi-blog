import Blog from "../models/Blog.js"

export const getAllDataFromDatabase = (req, res) => {
    Blog.find()
        .then(data => {
            if(data.length < 1){
                return (
                    res.status(404).send({
                        code: 404,
                        status: 'NOT FOUND',
                        data: {
                            message: "Data empty"
                        }
                    })
                )
            }
            return (
                res.status(200).send({
                    code: 200,
                    status: 'OK',
                    data
                })
            )
        })
        .catch(err => {
            res.json(err)
        })
}

export const addDataToDatabase = ( req, res )=>{
    const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        slug: req.body.slug,
        published: req.body.published
    })

    blog.save()
        .then(data => {
            res.status(201).send({
                code: 201,
                status: 'CREATED',
                data
            })
        })
        .catch(err => {
            res.json(err)
        })
}

export const deleteDataById = (req, res) => {
    Blog.findById({_id: req.params.id})
        .then(data => {
            if(!data){
                return(
                    res.status(404).send({
                        code: 404,
                        status: 'NOT FOUND',
                        data: {
                            message: 'Data empty'
                        }
                    })
                )
            }
            Blog.deleteOne({_id : req.params.id })
                .then(()=>{
                    return(
                        res.status(202).send({
                            code: 202,
                            status: 'ACCEPTED',
                            data: {
                                message: 'Deleted success'
                            }
                        })
                    )
                })
                .catch(err => {
                    return(
                        res.json({
                            message : err.message
                        })
                    )
                })
        })
}

export const getDataById = (req, res) => {
    Blog.findById({_id : req.params.id})
        .then((data)=>{
            if(!data){
                return(
                    res.status(404).send({
                        code: 404,
                        status: 'NOT FOUND',
                        data: {
                            message: 'Data empty'
                        }
                    })
                )
            }

            return(
                res.status(200).send({
                    code: 200,
                    status: 'OK',
                    data
                })
            )
        })
}

export const updateDataById = (req, res)=> {
    Blog.findById({_id: req.params.id})
        .then(data => {
            if(!data){
                return(
                    res.status(404).send({
                        code: 404,
                        status: 'NOT FOUND',
                        data: {
                            message: 'Data empty'
                        }
                    })
                )
            }
            Blog.updateOne(
                {
                    _id : req.params.id
                },
                {
                    title: req.body.title,
                    author: req.body.author,
                    body: req.body.body,
                    slug: req.body.slug,
                    published: req.body.published
                }
                )
                .then(()=>{
                    return(
                        res.status(202).send({
                            code: 202,
                            status: 'ACCEPTED',
                            data: {
                                message: 'Updated success'
                            }
                        })
                    )
                })
                .catch(err => {
                    return(
                        res.json({
                            message : err.message
                        })
                    )
                })
        })
}