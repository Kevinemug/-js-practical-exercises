const sortProducts =products=> {
    function compareProducts(product1, product2) {
      return product1.price - product2.price;
    }
  
    products.sort(compareProducts);
  
    return products;
  }
  
  const products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 },
  ];
  
  const sortedProductList = sortProducts(products);
  console.log(sortedProductList);
  