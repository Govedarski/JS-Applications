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
        path: ()=>'/data/offers',
        method: 'post'
    },
    getList: {
        path: ()=>'/data/offers?sortBy=_createdOn%20desc',
        method: 'get'
    },
    getDetails: {
        path: (id)=>'/data/offers/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/offers/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/offers/'+id,
        method: 'delete'
    },
    myItems:{
        path: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
        method: 'get'
    },

    apply:{
        path: ()=>`/data/applications`,
        method: 'post'
     },
    applyNumber:{
        path: (offerId)=>`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
        method: "get"
    },
    hasApply:{
        path: (offerId, userId)=>`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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
        path:(query)=> `/data/albums?where=name%20LIKE%20%22${query}%22`,
        method :"get"
    },
};