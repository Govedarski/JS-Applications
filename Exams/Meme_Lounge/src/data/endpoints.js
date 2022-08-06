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
        path: ()=>'/data/memes',
        method: 'post'
    },
    showList: {
        path: ()=>'/data/memes?sortBy=_createdOn%20desc',
        method: 'get'
    },
    showDetails: {
        path: (id)=>'/data/memes/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/memes/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/memes/'+id,
        method: 'delete'
    },
    myProfile:{
        path: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
        method: 'get'
    }
};