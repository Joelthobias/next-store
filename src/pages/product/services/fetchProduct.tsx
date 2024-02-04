
const fetchProduct = async (id:number) => {

    const url = `https://fakestoreapi.com/products/${id}`;
    try {
        console.log("Api callied to fetch");



        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export { fetchProduct };
