import { useContext, useEffect, useState } from "react";
import Fetch from "../../axios/config";
import { ProductsDiv } from "./productsDiv";
import img  from '../../../public/img/produto3.png';
import { AppContext } from "../../context/AppContext";

interface IProps {
  attributes: any;
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}
export const FetchApi = () => {
  const {products, setProducts } = useContext<any>(AppContext);
  useEffect(() => {
      Fetch
      .get('products')
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data)
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className="flex flex-row gap-4">
      {products.map((item) => (
        <ProductsDiv
        id={item.id}
        imgUrl={img}
        name={item.attributes.nome}
        valor={item.attributes.preco}
        description={item.attributes.descricao}
        p={item.attributes.preco}
        />
      ))}
    </div>
  );
}