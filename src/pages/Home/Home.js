import React from 'react'
import CardList from '../../components1/Card-list1/Card-list.components1';
import Search from '../../components1/Search1/Search.components1';
import './Home.styles.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({monsters:users}))
    }


    handleSearch = (event)=>{
            this.State({searchField:event.target.value})

        // const{searchField}=this.props
        // searchField(event.target.value)
    }

    render(){
        const{monsters,searchField}=this.state
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>MONSTER ROLLODEX</h1>

            <Search handleSearch= {this.handleSearch}/>
           
            <CardList monsters= {filteredMonsters}/>
            </div>
            </>
        )
    }
}
export default Home