function Header(props) {
    return <h3>{props.question}</h3>
}

function Answer(props) {
    return <button id={props.index} onClick = {() => props.handler(props.index)}>{props.label}</button>
}

function AnswerOptions(props) {
    var i = 0
    console.log(props.options)
    var answerOptions = props.options.map(function(item) { 
        return <Answer index={i++} label={item} handler={props.handler} />
    });
    return (
        <div> 
            <ul>
                {answerOptions}
            </ul>
        </div>
    )
}

function Question(props) {
    return (
        <div>
            <Header question={props.question.label} />
            <AnswerOptions options={props.question.options} handler={props.handler} />
        </div>
    )
}

function PanelScore(props) {
    return (
        <div>
            <h3>Correct: {props.correct}</h3>
            <h3>Incorrect: {props.incorrect}</h3>
        </div>
    )
}

class Game extends React.Component{

    constructor(props){
        super(props)

        this.state = {correct: 0, incorrect: 0, current : 0, completed : false}
        this.handleClick = this.handleClick.bind(this)
        this.questions = [
            {
                label: "Selecione a opção 2: ",
                correct: 2,
                options : ["Opção 0", "Opção 1", "Opção 2", "Opção 3"]
            },
            {
                label: "Qual ano blablabla : ",
                correct: 1,
                options : ["1500", "1600", "1700"]
            }
        ]
    }

    handleClick(optionIndex) {
        if (this.questions[this.state.current].correct == optionIndex) {
            this.setState({correct : this.state.correct + 1})
        } else {
            this.setState({incorrect : this.state.incorrect + 1})
        }
        if (this.hasNextQuestion()) {
            this.nextQuestion()
        } else {
            this.setState({completed : true})
        }            
    }
    
    hasNextQuestion(){
        return (this.state.current < this.questions.length - 1)
    }

    nextQuestion() {
        this.setState({
            current : this.state.current + 1
        })
    }

    render() {
        var questionPane;
        if (this.state.completed) {
            questionPane = <h3>The game already ended</h3>
        } else {
            questionPane = <Question question={this.questions[this.state.current]} handler={this.handleClick} />
        }
        return (
            <div>
                {questionPane}
                <PanelScore correct={this.state.correct} incorrect={this.state.incorrect} />
            </div>
        )
    }

}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
)
