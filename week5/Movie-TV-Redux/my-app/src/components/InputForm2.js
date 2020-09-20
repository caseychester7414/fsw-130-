import React, {Component} from 'react'



class InputForm2 extends Component{


constructor(){
  super()
  this.state={
    show:{
      title:''
    }
  }
}

handleChange = e =>{
  e.preventDefault()
const newTitle = {...this.state.show, title: e.target.value}
this.setState({show: newTitle})
}

handleSubmit = e =>{
  e.preventDefault()
  
}

render(){
  return(

    <div>
     
        <form className='input'>
            <input
            type='text'
            name='title'
            placeholder='Enter Title here'
            value={this.state.show.title}
            onChange={this.handleChange}
            />
            <button>Enter</button>
        </form>

        <h2>Show Output Goes Here</h2>
    </div>
 )

}
     

}
export default InputForm2