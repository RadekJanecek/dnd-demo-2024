import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Container';
import styles from './Basket.module.css';

export const Basket = () => { 
    const [basket, setBasket] = useState(0);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.APPLE],
        drop: (item, monitor) => {
            setBasket(prev => prev + item.value);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    return <div ref={drop} className={styles.basket}>{basket}</div> }

export default Basket;