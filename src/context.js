import React, { useState, useContext } from 'react';
import axios from 'axios'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [items,setItems] = useState([]);

  // USER //
  axios.defaults.withCredentials= true;
  const [email, setEmail] = useState('');
  const [cart,setCart] = useState([]);

  const logout = () => {
    axios.post('https://obj-api.herokuapp.com/logout', {}, {withCredentials:true})
    .then(() =>{ setEmail(); setCart([])});
  } 

  // SEARCH BAR //
  const [searchModal, setSearchModal] = useState(false);
  const [ name, setName] = useState('');
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  const filteredItems = items.filter(
    item =>{
      return (
        item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
        ||
        item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    }
  )
  
  
  const handleChange = (e, value) => {
    if (name && isEditting) {
      setName(e.target.value)
      setSearchField(name);
      if (e.target.value === '') {
        setSearchShow(false)
      }
    }
    else{
      setName(e.target.value)
      setSearchField(e.target.value);
      if (e.target.value === '') {
        setSearchShow(false)
      }
      else{
        setSearchShow(true);
      }
    }
  }
  
  const edit = (_id) =>{
    const specificItem = getItem(_id)
    const title = specificItem.title;
    setIsEditting(true);
    setName(title)
    setSearchShow(false)
    setSearchModal(false)
    mapFilteredItems(_id)
  };

  const mapFilteredItems = (e) =>{
    setName('');
    setSearchField(name);
    const filtered = items.filter(
      item =>{
        return (
          item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
          ||
          item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
      }
    )
    setFilteredList(filtered); 
    setSearchModal(false);
  }


  // PRODUCTS //
  const [count,setCount] = useState([]);
  // eslint-disable-next-line
  const [detailProduct,setDetailProduct] = useState({});
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const recommended = items.filter((item)=> item.category === 'recommended')
  const defacto = items.filter((item)=> item.category === 'defacto store')
  const brand = items.filter((item)=> item.category === 'brand festival top deals')
  const anker = items.filter((item)=> item.category === 'anker store')
  const accessories = items.filter((item)=> item.category === 'accessories you might need')
  const mobile = items.filter((item)=> item.category === 'mobile accessories')
  const footwares = items.filter((item)=> item.category === 'footwares')
  

  const getItem = (_id) => {
    const product = items.find(item => item._id === _id);
    return product;
  }
  
  const getCart = (_id) => {
    const product = cart.find(item => item._id === _id);
    return product;
  }
  
  const handleDetail = (_id) =>{
    const product = getItem(_id);
    setDetailProduct(product);
  }

  const addToCart = (_id) =>{
    const checkItem = cart.every(item => item._id !== _id);
    if (checkItem && email) {
      const product = getItem(_id);
      const price = product.price;
      axios.patch('https://obj-api.herokuapp.com/addcart', {cart: [...cart, {...product, inCart: true, count: 1, total: price}]}).then((res)=>{
        setCart([...cart, {...product, inCart: true, count: 1, total: price}]);
        setModal(true);
        setModalContent(product);
      }).catch((err)=> alert(err));
    } else if(!checkItem && email){
      alert('item is in cart')
    }
    else{
      alert('please login')
    }
  }

  const increment = (_id) =>{
    const car = getCart(_id);
    car.count = car.count + 1;
    car.total = car.count * car.price;
    axios.patch('https://obj-api.herokuapp.com/addcart', {cart: [...cart]}
    );
    setCount([cart]);
  }

  const decrement = (_id) =>{
    const car = getCart(_id);
    car.count = car.count - 1;
    if(car.count === 0){
      return removeItem(_id);
    }
    else{
      car.total = car.count * car.price;
      axios.patch('https://obj-api.herokuapp.com/addcart', {cart: [...cart]}
      );
      setCount([car])
    }
  }

  const removeItem = (_id) =>{
    // eslint-disable-next-line
    {/*let tempCart = [...cart];
    tempCart = tempCart.filter((item)=>item.id !== id);
    let removed = tempCart(id);
    removed.inCart = false;
    setCart(removed);*/}
    const car = cart.filter((item)=> item._id !== _id);
    axios.patch('https://obj-api.herokuapp.com/addcart', {cart: car}
    ).then(()=> setCart(car))
  };

  const cartTotalCount = cart.reduce((total, cart) => total + cart.count , 0);
  const cartTotalPrice = cart.reduce((total, cart) => total + cart.price * cart.count, 0);

  

  
  
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        // USER //
        email,
        setEmail,
        logout,
        searchModal,
        setSearchModal,
        name,
        searchField,
        searchShow,
        filteredItems,
        handleChange,
        edit,
        isEditting,
        filteredList,
        mapFilteredItems,
        items,
        setItems,
        detailProduct,
        handleDetail,
        modal,
        setModal,
        modalContent,
        recommended,
        defacto,
        brand,
        anker,
        accessories,
        mobile,
        footwares,
        getItem,
        addToCart,
        cart,
        setCart,
        carts: [cart, setCart],
        increment,
        decrement,
        removeItem,
        count,
        cartTotalCount,
        cartTotalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
