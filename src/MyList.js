import { Component } from "react";
import icons from './done.webp'

export class MyList extends Component{
    state={
        inputField:" ",
        myPlans:[]
    }

    onChangeEvent(e){
        this.setState({inputField:e});
    }

    addItem(add){
        if (add === ''){
            alert("Please, write smth!")
        }
        else{
            let planList = this.state.myPlans;
            planList.push(add);
            this.setState ({myPlans:planList, inputField:""})
        }
    }

    deleteItem(){
        let planList = this.state.myPlans;
            planList=[];
            this.setState ({myPlans:planList, inputField:""})
    }

    crossWord(event){
        const li=event.target;
        li.classList.toggle('crossed')
       
       
    }

    onFormSubmit(e){
        e.preventDefault()
    }


    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
         <div>
            <div className="container ">
                <input   className="input" type="text" placeholder = " What are you planning to do in 2023?"
                
                
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.inputField} />
            </div>
            <div className="container list">
                <ul className=" list"> 
                    {this.state.myPlans.map((item,index) => (<li onClick={this.crossWord} key={index}>
                         <img src={icons} alt="iconic" width="30px"/>
                        {item}</li>))}
                </ul>

            </div>
            <div className="container">
               <button onClick = {() => this.addItem(this.state.inputField)}> Add </button>
            </div>
            <div className="container">
                <button onClick={()=>this.deleteItem()}>Delete</button>
            </div>
         </div>
         </form>
        )
    }
}