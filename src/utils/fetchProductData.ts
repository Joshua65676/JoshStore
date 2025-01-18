export const fetchProductData = async (all = false) => {
  try {
    const url = all ? 'http://localhost:3000/api/products?all=true' : 'http://localhost:3000/api/products';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.productData;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
