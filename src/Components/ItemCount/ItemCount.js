

const ItemCount = ({count, setCount}) => {

    const onAdd = () => {
        setCount(count + 1)
    }

    const substract = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>ItemCount</div>
    )
}

export default ItemCount