import React, {useState} from 'react'
import PetList from '../components/PetList'

const Main = () => {

    const [pet, setPet] = useState([])

    return (
    <div>
        <PetList pet={pet} setPet={setPet} />
    </div>
    )
}

export default Main;