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
        path: ()=>'/data/wiki',
        method: 'post'
    },
    getList: {
        path: ()=>'/data/wiki?sortBy=_createdOn%20desc',
        method: 'get'
    },
    getDetails: {
        path: (id)=>'/data/wiki/'+id,
        method: 'get'
    },
    edit: {
        path: (id)=>'/data/wiki/'+id,
        method: 'put'
    },
    delete: {
        path: (id)=>'/data/wiki/'+id,
        method: 'delete'
    },
    recentItems:{
        path: () => `/data/wiki?sortBy=_createdOn%20desc&distinct=category`,
        method: 'get'
    },
    search:{
        path:(query)=> `/data/wiki?where=title%20LIKE%20%22${query}%22`,
        method :"get"
    },
    getItemsByPage:{
        path:(offset, pageSize) => `/data/wiki?offset=${offset}&pageSize=${pageSize}`,
        method:"get"
    },
    getItemsNumber:{
        path: () =>`/data/wiki?count`,
        method: "get"
    }
};