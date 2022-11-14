import React,{useEffect,useState} from 'react'
import Card from './Card';
import Card2 from './Card2';

const Data = () => {
const [cart, setCart] = useState([]);
const [wish, setWish] = useState([]);
const [data,setData]=useState([]);
const [fakeState,setFake]=useState('');
const [showForm, setShowForm] = useState(0);
const [selectdata, setSelect] = useState([]);
useEffect(()=>{
  fetch('http://185.252.234.162:8000/api_v1/store/public/getServiceListByStoreId?storeId=1').then(
      res =>res.json()
  ).then(json => {
    var data1=json
    // console.log(json)
    data1.data.forEach((item)=>{
      let obj=item
      obj['isClicked']=false
      obj['istoggle']=false
      // console.log(item)
    })
    // console.log(data1.data)
    setData(data1)
    // console.log(data)
  })

},[])
const addItem = (prod, index) => {
  var data1={};
  console.log(prod)
  data1['id']=prod.id;
  data1['price']=prod.Variations[0].price;
  data1['Service id']=selectdata;
  data1['minutes']=prod.Variations[0].VariationProperties[0].value;
  // console.log(selectdata)
  setCart([...cart, data1]);
  // console.log(cart)
  };

const display = ()=>{
  setShowForm(!showForm);
  console.log(JSON.stringify(cart,null,"\t"))
}

const remove = (prod,id) => {
  setCart(current =>
    current.filter(data => {
      return data.id !== id;
    }),
  );
};

useEffect(() => {
  getData();
  }, [fakeState])
const getData = () => {
  const arr = data
  setData(arr)
}
const wishItem = (prod, index) => {
  setWish([...wish, prod]);
  console.log(wish)
  };
  const removewish = (prod,id) => {
    setCart(current =>
      current.filter(data => {
        return data.id !== id;
      }),
    );
  };
const handleChange=(e)=> {
    console.log(e.target.value);
    setSelect(e.target.value)
};
const handleadd = (id) => {
  let newArray = data;
  // console.log(newArray.data.length)
  for (let i = 0; i < newArray.data.length; i++) {
      let item = newArray.data[i];
      // console.log(item)
      if(item.id===id){
        if(!item.istoggle){
          wishItem(item,id);
        }
        else{
          removewish(item,id);
        }
        item.istoggle = !item.istoggle;
      }
      
      newArray[i] = item;
  }
  setFake(fakeState+1)
  setData(newArray);

  
  // console.log(items.istoggle)
}

const handleClick = (id) => {
  let newArray = data;
  // console.log(newArray.data.length)
  for (let i = 0; i < newArray.data.length; i++) {
      let item = newArray.data[i];
      // console.log(item)
      if (item.id === id) {
        if(!item.isClicked){
          addItem(item,id);
        }
        else{
          remove(item,id);
        }
        item.isClicked = !item.isClicked;
        
      }
      newArray[i] = item;
  }
  setFake(fakeState+1)
  setData(newArray);

}
return (
    <div>
      {data.data?.map((item,index) => (
          <div className="ui cards">    
              <Card key={index} items={item}  addItem={handleadd} handleClick={handleClick} handlechange={handleChange}/>
                
                {/* <Card2 key={index} items={item}  addItem={handleadd} handleClick={handleClick} handlechange={handleChange}/> */}
          </div>
      ))}
      {/* <div style={{marginTop:"3%"}}>
      <button className="ui secondary button" data-tooltip={JSON.stringify(cart,null,"\t")} data-position="top left" onClick={display}>submit</button>
      </div> */}
      
    </div>
  );
}
export default Data
