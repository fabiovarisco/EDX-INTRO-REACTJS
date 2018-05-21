ReactDOM.render(
    <Welcome name="Fabio" />,
    document.getElementById('root')
)


        var element = <h1>Hello World!</h1>


        var element = React.createElement(
            'h1',
            null,
            'Hello World!'
        )

        var item = {
            id: 101,
            name: "Cheese",
            price: 5
        }
        var element = <li key={item.id}>{item.name} : ${item.price} </li>


        function Welcome(props){
            return <h1>Hello, {props.name}!</h1>
        }


        class Welcome extends React.Component{
            constructor(props) {
                super(props)
                this.state = {counter : 0}
            }

            handleClick() {
                this.setState({counter : this.state.counter + 1})
            }
            componentDidMount() {
                // Called after the component mounted
            }
            render(){
                return (<div>
                            <h1>Hello, {this.props.name}!</h1>
                            <p>Counter: {this.state.counter}</p>
                            <button onClick={() => this.handleClick()}>Increment</button>
                        </div>)
            }
        } 

        function ShoppingList(props){
            return (
                <div>
                    <h3>{props.header}</h3>
                    <ol>
                        <ListItem item = {props.items[0]}/>
                        <ListItem item = {props.items[1]}/>
                        <ListItem item = {props.items[2]}/>
                    </ol>
                </div>
            )
        }


        var array =[
            {id: 101, product:"Apple", price:3},
            {id: 102, product:"Banana", price:1},
            {id: 103, product:"Carrot", price:2}
        ]
          
        var elements = array.map( (item) => {
            return <li key={item.id}>Product: {item.product} | Price: ${item.price}  </li>
        })
          
        ReactDOM.render(
            <ol>{elements}</ol>,
            document.getElementById('root')
        )


        class ControlledInput extends React.Component{

            constructor(props){
                super(props)
                this.state = {value: ''}
                this.handleChange = this.handleChange.bind(this)
            }
            handleChange(event){
                this.setState({value: event.target.value})
            }
            render(){
                return (
                    <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                )
            }
        }


        

