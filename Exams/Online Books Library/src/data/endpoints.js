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
        path: ()=>'/data/books',
        method: 'post'
    },
    getList: {
        path: ()=>'/data/books?sortBy=_createdOn%20desc',
        method: 'get'
    },
    getDetails: {
        path: (id)=>'/data/books/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/books/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/books/'+id,
        method: 'delete'
    },
    myItems:{
        path: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
        method: 'get'
    },

    donate:{
        path: ()=>`/data/likes`,
        method: 'post'
     },
    donateNumber:{
        path: (bookId)=>`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
        method: "get"
    },
    hasDonate:{
        path: (bookId, userId)=>`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
        method: "get"
    }
};