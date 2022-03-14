import React ,{useState} from 'react';
import "./style.css";
import ProdApi from './productApi.jsx';
import SingleProduct from './singleProduct';


export default function Products() {
    let active=0;
  const [curProd, setCurProd] = useState(ProdApi);
  const FilterApi=(category)=>{
      const UpdatedApi=ProdApi.filter((currElement)=>{
          return currElement.category=== category;
      });
      setCurProd(UpdatedApi);

  };
    
    
    return (
        <><div className="category">
        <button onClick={()=>setCurProd(ProdApi)}>All</button>
        <button onClick={()=>FilterApi("lab apparatus")}>Lab Apparatus</button>
        <button onClick={()=>FilterApi("models")}>Models</button>

        </div>
        <h1>Products</h1>
           { curProd.map(function MultipleProduct(val){ return(
        <>
          
        <SingleProduct id={val.id} 
        image={val.image}
        name={val.name}
        description={val.description}
        category={val.category}
        
        />
        </>
    )

           })
           }

        </>
    );
};


