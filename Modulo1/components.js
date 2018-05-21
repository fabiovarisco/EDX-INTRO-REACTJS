ReactDOM.render(
    <CarShop />,
    document.getElementById("root")
)

function Header() {
    return (
        <div>
            <h2>Welcome to React Transportation</h2>
            <p>The best place to buy vehicles online</p>
        </div>
    )
};

function CarItem(props) {
    return (
        <ul>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                <tr>
                    <td>{props.car.year}</td>
                    <td>{props.car.model}</td>
                    <td>${props.car.price}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </table>
        </ul>
    )
}; 


function CarListOptions(props) {
    var typeOptions = props.items.map(function(item) {
        return (
            <option value={item}>{item}</option>
        )
    });
    return (
        <div>
            <h2>Choose Options</h2>
            <div>
                New Only 
                <input type="checkbox" id="coding" name="interest" value="coding" checked />
            </div>
            <div>
                <p/>
                Select Type
                <select>{typeOptions}</select>
            </div>
        </div>
    )

}

function CarList(props) {
    var cars = props.carList.carList.map(function(item) {
        return (
            <CarItem car={item} />
        )
    });
    return (
        <div>
            <h2>{props.carList.label}</h2>
            {cars}
        </div>
    )
}

function CarShop(props){
    var options = ["All", "Cars", "Trucks", "Convertibles"];
    var carListByModel = [{
        label : "Cars",
        carList : [{year : 2013, model : "A", price : 32000},
                    {year : 2011, model : "B", price : 4400},
                    {year : 2016, model : "B", price : 15500},
                    ]
    },
    {
        label : "Trucks",
        carList : [{year : 2014, model : "D", price : 18000},
                    {year : 2013, model : "E", price : 5200}
                    ]
    },
    {
        label : "Convertibles",
        carList : [{year : 2009, model : "F", price : 2000},
                    {year : 2010, model : "G", price : 6000},
                    {year : 2012, model : "H", price : 12500},
                    {year : 2017, model : "M", price : 50000}
                    ]
    }];
    var carLists = carListByModel.map(function (item) {
        return (
            <div>
                <CarList carList = {item} />
            </div>
        );
    });
    return (
        <div>
            <Header />
            <CarListOptions items={options} />
            {carLists} 
        </div>
    )
}

