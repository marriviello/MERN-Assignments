import {useState} from "react"

const AddPerson = ({people, setPeople}) => {
    const[name, setName]=useState('')
    const[gender, setGender]=useState('')
    const[age, setAge]=useState('')
    const[money, setMoney]=useState('')
    const[height, setHeight]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const person = {
            'name': name,
            'gender': gender,
            'age': age,
            'money': money,
            'height': height,
        }
        setPeople([...people, person])
        setName('')
        setGender('')
        setAge('')
        setMoney('')
        setHeight('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={e=>setName(e.target.value)} value={name}/>
            </label>
            <label>
                Gender:
                <input type="text" onChange={e=>setGender(e.target.value)} value={gender}/>
            </label>
            <label>
                Age:
                <input type="number" onChange={e=>setAge(e.target.value)} value={age}/>
            </label>
            <label>
                Money:
                <input type="number" onChange={e=>setMoney(e.target.value)} value={money}/>
            </label>
            <label>
                Height:
                <input type="number" onChange={e=>setHeight(e.target.value)} value={height}/>
            </label>
            <input type="submit" value="Create Profile" />
        </form>
    )
}

export default AddPerson