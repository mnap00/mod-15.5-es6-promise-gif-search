App =  React.createClass({
    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
        return (
            <div style={styles}>
                    <h1>GIF Search Machine</h1>
                    <p>Find GIF on <a href='http://giphy.com'>giphy</a>. If you wanna search another gif - press enter.</p>
                    <Search />
                <Gif />
            </div>
        );
    }
});
