export const endpoints = {
    register: {
        path: ()=>'/users/register',
        method: 'post'
    },
    login: {
        path: ()=>'/users/login',
        method: 'post'
    },
    logout: {
        path: ()=>'/users/logout',
        method: 'get'
    },
    // Furniture
    create: {
        path: ()=>'/data/cars',
        method: 'post'
    },
    getList: {
        path: ()=>'/data/cars?sortBy=_createdOn%20desc',
        method: 'get'
    },
    getDetails: {
        path: (id)=>'/data/cars/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/cars/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/cars/'+id,
        method: 'delete'
    },
    myItems:{
        path: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
        method: 'get'
    },

    donate:{
        path: ()=>`/data/likes`,
        method: 'post'
     },
    donateNumber:{
        path: (theaterId)=>`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
        method: "get"
    },
    hasDonate:{
        path: (theaterId, userId)=>`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
        method: "get"
    },
    recentItems:{
        path: () => `/data/games?sortBy=_createdOn%20desc&distinct=category`,
        method: 'get'
    },
    getComments:{
        path:(id)=> `/data/comments?where=gameId%3D%22${id}%22`,
        method :"get"
    },
    createComment:{
        path:()=> `/data/comments`,
        method :"post"
    },
    search:{
        path:(query)=> `/data/cars?where=year%3D${query}`,
        method :"get"
    },
};