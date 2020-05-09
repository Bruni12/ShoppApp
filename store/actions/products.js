export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = productId => {
  return { type: DELETE_PRODUCT, pid: productId };
}; 

export const CreateProduct = (title, description, imageUrl, price) => {
  return { 
    type: CREATE_PRODUCT, 
    productData: {
      title,
      description: 
      description,
      imageUrl,
      price
    }
  };
};

export const CreateProduct = (id, title, description, imageUrl ) => {
  return { 
    type: CREATE_PRODUCT, 
    pid: id,
    productData: {
      title,
      description: 
      description,
      imageUrl
    }
  };
};
