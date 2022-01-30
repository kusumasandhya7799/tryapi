import Card from '../Card1/Card.component1'
import './Card-list.styles.css'

const CardList=(props)=>{
    const {monsters}= props
    return(
        <div className='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        <Card key={index} monster={monster} />
                    )
                )
            }
        </div>
    )
}
export default CardList