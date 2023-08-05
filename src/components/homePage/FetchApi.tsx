import { useEffect, useState } from "react";
import Fetch from "../../axios/config";
import axios from "axios";
import { ProductsDiv } from "./productsDiv";
import img  from '../../../public/img/produto3.png';

interface IProps {
  attributes: any;
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}
export const FetchApi = () => {
  const [ok, setOk] = useState<IProps[]>([]);
  useEffect(() => {
      Fetch
      .get('products')
      .then((res) => {
        console.log(res.data);
        setOk(res.data.data)
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className="flex flex-row gap-4">
      {ok.map((item) => (
        <ProductsDiv
        id={item.attributes.id}
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