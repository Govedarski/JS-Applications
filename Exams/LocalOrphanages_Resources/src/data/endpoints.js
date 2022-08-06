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
        path: ()=>'/data/posts',
        method: 'post'
    },
    showList: {
        path: ()=>'/data/posts?sortBy=_createdOn%20desc',
        method: 'get'
    },
    showDetails: {
        path: (id)=>'/data/posts/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/posts/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/posts/'+id,
        method: 'delete'
    },
    myItems:{
        path: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
        method: 'get'
    },

    donate:{
        path: ()=>`/data/donations`,
        method: 'post'
     },
    donateNumber:{
        path: (postId)=>`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
        method: "get"
    },
    hasDonate:{
        path: (postId, userId)=>`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
        method: "get"
    }
};