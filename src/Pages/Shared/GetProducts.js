import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/get-products`);
            setLoading(false);
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return [products, setProducts, loading, setLoading];
};

export default GetProducts;
