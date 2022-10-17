import React, {useEffect} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

const PetList = (props) => {
    const {pet, setPet} = props
    // const navigate = useNavigate()

    useEffect( () => {
        axios.get("http://localhost:8000/api/pets")
        .then((result) => setPet(result.data))
        .catch((error) => console.log(error))
    }, [setPet])

    return (
        <div>
            <h1>Pet Shelter:</h1>
            <h3>These pets are looking for a good home</h3>
            <Link to ={'pet/create'}>Add a pet to the shelter! </Link> <br /><br />
            {
                pet.map((pet, index) => {
                    return <body key={index}>
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to ={`pet/${pet._id}`}> Details</Link> {" | "}
                                    <Link to ={`pet/edit/${pet._id}`}>Edit</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </body>
                })
            }

        </div>
    )
}

export default PetList