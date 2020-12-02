import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div className='search-bar ui segment' style={{position: 'relative', left: '7%', marginBottom: '1rem', marginTop: '-2rem'}}>
            <br></br>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;