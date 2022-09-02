import Comp2 from './Comp2'

const Component = (props) => {
    //adding props allows us to receive props and use in component

    const {myData, message} = props  //destructuring 

    //JSX
    return(
        <div className='my-class'>
            <h1>Hello World!</h1>
            <h2>More Info</h2>
            <h2>{myData}</h2>
            <h3>{message}</h3>
            <Comp2 newData={myData} newMessage={message}/>
        </div>
    )
}

export default Component;

