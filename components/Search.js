Search = React.createClass({
    getInitialState: function() {
        return {
            searchingText: ''
        };
    },
    handleChange: function(event) {
        var searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });
    },
    render: function() {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidht: '350px'
        };
        return <input
                type='text'
                onChange={this.handleChange}
                placeholder='Enter searched phrase here'
                style={styles}
                value={this.state.searchTerm}
            />
    },
});
