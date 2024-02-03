
const fetchProducts = async () => {

    const url = 'https://fakestoreapi.com/products' ;
    try {
        console.log("Api callied to fetch");



        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export { fetchProducts };
