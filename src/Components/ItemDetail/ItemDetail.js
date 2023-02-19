
const ItemDetail = ({detail}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '20px', flexDirection: 'column', alignItems: 'center'}}>
      <img src={detail.image} alt={detail.name} width='250px'/>
      <h2>{detail.name}</h2>
      <h3>{detail.price}</h3>
      <h4>{detail.description}</h4>
    </div>
  )
}

export default ItemDetail