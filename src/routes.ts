export const AdminRoutes = {
  company: {
    list: '/list',
    approve: '/approve',
    reject: '/reject',
  },
  product: {
    list: '/list',
    approve: '/approve',
    reject: '/reject',
  },
} as const;

export const PublisherRoutes = {
  company: {
    addMember: '/add-member',
    removeMember: '/remove-member',
    setMemberRole: '/set-member-role',
    create: '/create',
    update: '/update',
    members: '/members',
  },
  product: {
    create: '/create',
    addKeys: '/add-keys',
    update: '/update',
    delete: '/delete',
    setDraft: '/set-draft',
    setPublished: '/set-published',
  },
} as const;

export const StoreRoutes = {
  catalog: '/catalog',
  library: '/library',
  product: '/product',
  productKey: '/product-key',
  cart: '/cart',
  clearCart: '/clear-cart',
  checkout: '/checkout',
  completeCheckout: '/complete-checkout',
} as const;

export const CommonRoutes = {
  login: '/login',
  signUp: '/sign-up',
} as const;
