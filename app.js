class ReactContainer extends React.Component{
    render(){
        return(
            <div>
                Hello! Welcome to kalvium
                <div>
                    this is babel
                </div>
            </div>
        )
    };
}
const container= document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);