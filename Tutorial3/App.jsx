function PostButton(props){
    var style = {
        width:24,
        height:24
    }
    return (
        <button style = {style} onClick = { () => props.handleClick()}>{props.label}</button>
    )
}

function PostText(props){
    var style = {
        border:"1px solid black",
        width: props.width
    }
    return (
        <div style = {style}>{props.text}</div>
    )
}

function Post(props){
    var style = {
        display:"flex"
    }
    return (
        <div style = {style}>
            <PostButton label = "x" handleClick = {props.removeItem}/>
            <PostText text = {props.title} width = "200"/>
            <PostButton label = "+" handleClick = {props.incrementScore}/>
            <PostText text = {props.score} width = "20"/>
            <PostButton label = "-" handleClick = {props.decrementScore}/>
        </div>
    )
}

function PostList(props){
    return (
        <ol>
        {
            props.postList.map((item,index) => 
                <Post key = {index} 
                      title = {item.title} 
                      score = {item.score}
                      incrementScore = {() => props.updateScore(index, 1)}                         
                      decrementScore = {() => props.updateScore(index, -1)} 
                      removeItem = {() => props.removeItem(index)}
                />
             )
         }
        </ol>
    )  
}

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {value:"", items : []}
    } 

    handleChange(event) {
        this.setState({value : event.target.value})
        console.log(event.target.value)
    }
    addItem(){
        var itemsCopy = this.state.items.slice()
        var truncatedString = this.state.value.substring(0,20);
        itemsCopy.push({"title":truncatedString,"score":0})
        itemsCopy.sort((a,b)=>{
          return b.score - a.score;
        })
        this.setState({items:itemsCopy,value:""})
    }

    updateScore(index,val){
        var itemsCopy = this.state.items.slice()
        itemsCopy[index].score += val
        itemsCopy.sort((a,b) => {
            return b.score - a.score
        })
        this.setState({items:itemsCopy})
    }

    removeItem(index){
        var itemsCopy = this.state.items.slice()
        itemsCopy.splice(index,1);
        itemsCopy.sort((a,b) => {
            return b.score - a.score
        })

        this.setState({items:itemsCopy})
    }

    render(){
        return (
            <div>
                <div>
                    <input value={this.state.value} onChange={this.handleChange.bind(this)} />
                    <button onClick={ () => this.addItem()}>Submit</button>
                </div>
                <div>
                    <PostList postList = {this.state.items} updateScore={this.updateScore.bind(this)} removeItem={this.removeItem.bind(this)}/>
                </div>
            </div>

        )
    }
}

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


        

