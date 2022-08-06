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
        path: ()=>'/data/pets',
        method: 'post'
    },
    getList: {
        path: ()=>'/data/pets?sortBy=_createdOn%20desc&distinct=name',
        method: 'get'
    },
    getDetails: {
        path: (id)=>'/data/pets/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/pets/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/pets/'+id,
        method: 'delete'
    },
    myItems:{
        path: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
        method: 'get'
    },

    donate:{
        path: ()=>`/data/donation`,
        method: 'post'
     },
    donateNumber:{
        path: (petId)=>`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
        method: "get"
    },
    hasDonate:{
        path: (petId, userId)=>`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
        method: "get"
    }
};