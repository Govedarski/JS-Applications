export async function getAllData(ctx, endpoint, id) {
    let data;
    if(!ctx.cache.updated){
        data = await ctx.request(endpoint,id)
        ctx.cache.data = Object.fromEntries(data.map(x=>[x._id, x]))
        ctx.cache.updated = true
    }else{
        data = Object.values(ctx.cache.data)
    }
    return data
}

export async function getSingleData(ctx, endpoint, id) {
    let data;
    if(id in ctx.cache.data){
        data = ctx.cache.data[id]
    }else{
        data = await ctx.request(endpoint, id)
        ctx.cache.data[id] = data
    }
    return data
}

export async function createData(ctx, endpoint, bodyData) {
    const data = await ctx.request(endpoint, bodyData)
    ctx.cache.data[data._id] = data
    return data
}

export async function editData(ctx, endpoint, id, bodyData) {
    const data = await ctx.request(endpoint,id, bodyData)
    ctx.cache.data[id] = data
    return data
}

export async function deleteData(ctx, endpoint, id) {
    await ctx.request(endpoint,id)
    delete ctx.cache.data[id]
}