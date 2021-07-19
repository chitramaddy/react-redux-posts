import React, { Component } from 'react';

class Postform extends Component {

    state={
        title: '',
        body: ''
    }

    onChange = (e) =>{
            this.setState({
                [e.target.name] : e.target.value
            })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.baody
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data=>console.log(data));

        this.setState({
            title: ' ',
            body: ' '
        });
    }
    render() {
        return (
               <form onSubmit={this.onSubmit}>

                <h1>Add post</h1>   
                   <div>
                       <label>Title: </label>
                       <br />
                       <input type='text' name='title' value={this.state.title} onChange={this.onChange}></input>
                   </div>
                   <br />
                   <div>
                       <label>Text: </label>
                       <br />
                       <textarea type='text' name='body' value={this.state.body} onChange={this.onChange}></textarea>
                   </div>
                   <br />
                   <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Postform;