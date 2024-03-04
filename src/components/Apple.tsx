import { ItemTypes } from "./Container";
import { useDrag } from "react-dnd";

export const Apple = ({value = 1}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.APPLE,
        item: {type: ItemTypes.APPLE, value: value },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.value}`);
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }) 
    }));


    return (
        <div ref={drag} style={{opacity: isDragging ? 0.5 : 1, fontSize: 25, fontWeight: 'bold', cursor: 'move'}}>
            🍎
        </div>
  )
}

export default Apple;