export const initialState = {
    products: [
        {
            id: 1,
            title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
            price: 29.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
            rating: 5
        },
        {
            id: 2,
            title: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
            price: 64.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg",
            rating: 4
        },
        {
            id: 3,
            title: "AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot",
            price: 14.49,
            image: "https://images-na.ssl-images-amazon.com/images/I/71p11135VSL._AC_SL1500_.jpg",
            rating: 4
        },
        {
            id: 4,
            title: "Garmin Forerunner 235, GPS Running Watch, Black/Gray",
            price: 161.72,
            image: "https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SL1500_.jpg",
            rating: 4
        },
        {
            id: 5,
            title: "Oculus Quest All-in-one VR Gaming Headset – 128GB",
            price: 649.00,
            image: "https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._SL1000_.jpg",
            rating: 5
        },
        {
            id: 6,
            title: "LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)",
            price: 548.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg",
            rating: 5
        }
    ],
    basket: [],
    user: null,
    drawerIsOpen: false
}

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = state.basket;

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.log(
                    `Can't remove product (id: ${action.id} as it's not in basket!)`
                );
            };
            return {
                ...state,
                basket: newBasket
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'CLOSE_DRAWER':
            return {
                ...state,
                drawerIsOpen: false
            };

        case 'OPEN_DRAWER':
            return {
                ...state,
                drawerIsOpen: true
            }

        default:
            return state;
    }
};

export default reducer