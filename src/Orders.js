import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import Order from './Order';

import './Orders.css';
import { useStateValue } from './StateProvider';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        } else {
            setOrders([])
        }
    }, [user]);

    return (
        <div className="orders">
            {(user && orders.length === 0) &&
                <h1>You don\'t have any orders!</h1>
            }
            {!user &&
                <h1><Link to="/login">Sign In</Link> to view your orders</h1>
            }
            {(user && orders.length === 0) &&
                <Link to="/"><button className="product__button">Start shopping now!</button></Link>
            }
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders;
