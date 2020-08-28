import React, { Component } from 'react'

/* Image items should appear here. */
class Input extends Component {

    state = {
        uglyImage: '',
        title: '',
        description: '',
        uglyList: [],
        comment: ''
    }
/* HandleChange currently displays text and iamges as required. Submit does not pass items, yet. */
    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    eventItemsUpdate = (event) => {
        event.preventDefault()
        this.setState({
            uglyList: this.state.uglyList.concat(this.state.uglyImage),
            uglyImage: ''
        })
    }

    render() {
        return (
            <div>
            
                <div>
                <form name="forms">
                    <Input 
                    type="text"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                    <Input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                    <Input
                    type="text"
                    placeholder="image-URL"
                    name="uglyImage"
                    value={this.state.uglyImage}
                    onChange={this.handleChange}
                    ></Input>
                    <br/>
                    <br/>
                    <button onClick={this.eventItemsUpdate}>Submit</button>
                    {console.log(document.forms.description)}
                </form>
                </div>
                
                    <p>{this.state.description}</p>
                <img src={this.state.uglyImage} alt="asfgasgt"/>
                <div>
            {this.state.uglyList.map(uglyItemsList => <div key={uglyItemsList}><img src={uglyItemsList} alt="idk"/><input /></div>
            

          
            </div>
        </div>
           
        )
    }
}

export default Input