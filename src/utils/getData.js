const URL_API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiUrl = id ? `${URL_API}${id}` : URL_API;

    try{
        const response = await fetch(apiUrl);
        const data     = await response.json();

        return data;
    }catch(error){
        console.log('Fetch Erro', error);
    }
};  

export default getData;

