const getQuery = async() => {
    const res = await fetch('realme.json');
    const data = await res.json();
    return data;
};

export default getQuery;