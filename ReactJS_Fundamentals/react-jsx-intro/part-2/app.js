function App () {
    return (
        <div>
            <Tweet 
            name="James"
            username="Jameeees"
            date ={new Date().toDateString()}
            message= "Hello World"
            />
            <Tweet 
            name="Raj"
            username="Rajjjjj"
            date ={new Date().toDateString()}
            message= "Hello World, Iam Raj"
            />

        </div>
    )
}