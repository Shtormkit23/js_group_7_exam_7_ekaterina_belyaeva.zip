import React, {useState} from 'react';
import './App.css';
import Item from "./components/Item/Item";
import Order from "./components/Order-Details/Order-Details";
import TotalPrice from "./components/Order-Details/TotalPrice";

const App = () => {
    const items = [
        {item: 'Hamburger', price: 80},
        {item: 'Cheeseburger', price: 90},
        {item: 'Fries', price: 45},
        {item: 'Coffee', price: 70},
        {item: 'Tea', price: 50},
        {item: 'Cola', price: 40},
    ];

    const [orders, setOrders] = useState([]);

    const [totalPrice, setTotalPrice] = useState(
        {sum: 0},
    );

    let totalItem = items.map((item, index) => {
        return (
            <Item
                key={index}
                item={item.item}
                price={item.price}
                newOrder={() => addItem(index)}
            >
            </Item>
        )
    })

    let newOrder = orders.map((order, index) => {
        if (typeof order === 'object') {
            return (
                <Order
                    key={index}
                    id={index}
                    order={order.order}
                    price={order.price}
                    quantity={order.quantity}
                    removeOrder={() => removeOrder(index)}
                >
                </Order>
            )
        }
    });

    const addItem = id => {
        const item = items[id];
        const orderItems = [...orders];
        const total = {...totalPrice};

        const order = {
            id: id,
            order: item.item,
            price: item.price,
            quantity: 1
        };

        const findOrder = orderItems.filter((orderItem, index) => {
            if (typeof orderItem === 'object' && orderItem.id === id) {
                return orderItem;
            }
        })

        if (!findOrder.length) {
            orderItems[id] = order;
        } else {
            orderItems[findOrder[0].id].quantity += order.quantity;
        }

        total.sum += order.price

        setTotalPrice(total)
        setOrders(orderItems)
    };

    const removeOrder = id => {
        const ordersCopy = [...orders];
        const newOrderCopy = {...ordersCopy[id]}
        const totalPriceCopy = {...totalPrice}

        ordersCopy.splice(id, 1);
        totalPriceCopy.sum -= (newOrderCopy.price * newOrderCopy.quantity);

        setOrders(ordersCopy);
        setTotalPrice(totalPriceCopy);
    };

    return (
        <div className="App">
            <div className="Order">
                <h3>Order Details:</h3>
                {newOrder}
                <TotalPrice
                    total={totalPrice.sum}>
                </TotalPrice>
            </div>
            <div className="Items">
                {totalItem}
            </div>
        </div>
    );
}

export default App;
