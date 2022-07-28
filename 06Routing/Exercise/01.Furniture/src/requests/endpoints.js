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
    createFurniture: {
        path: ()=>'/data/catalog',
        method: 'post'
    },
    getAllFurniture: {
        path: ()=>'/data/catalog',
        method: 'get'
    },
    getFurniture: {
        path: (id)=>'/data/catalog/'+id,
        method: 'get'
    },
    updateFurniture: {
        path: (id)=>'/data/catalog/'+id,
        method: 'put'
    },
    deleteFurniture: {
        path: (id)=>'/data/catalog/'+id,
        method: 'delete'
    },
    getUserFurniture:{
        path: (userId)=>`/data/catalog?where=_ownerId%3D%22${userId}%22`,
        method: 'get'
    },

};