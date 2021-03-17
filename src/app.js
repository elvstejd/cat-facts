class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: [
                {
                    imageLink: "https://d.newsweek.com/en/full/607719/djt.jpg?w=790&f=082fb7486866b8a7efcddfcfb30cf017",
                    text: "Ahora"
                },
                {
                    imageLink: "https://lh3.googleusercontent.com/proxy/4OV_EHRJd5JDz41eQvsrCZB6X8i01JJ41A2doelIKhpUyZdP40EhjmHcf6cRwXxHq6j2AKrbWnqgyxGC3YNRyvPXQ-w21R4th9GHzjsZ1Oi2AotJPVU",
                    text: "Es"
                },
                {
                    imageLink: "https://d.newsweek.com/en/full/607858/adsgads.jpg",
                    text: "Tu turno"
                },
            ],
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Gallery imageData={this.state.imageData}/>
                <LoadMoreButton />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <header></header>
                <div className="title-container">
                <h1>cat facts</h1>
                </div>
            </div>
        );
    }
}

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                {
                    this.props.imageData.map((image) => (
                    <Card 
                        imageLink={image.imageLink}
                        catFact={image.text}
                    />
                    ))
                }
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.imageLink}/>
                </div>
                <div className="cat-fact">
                    {this.props.catFact}
                </div>
            </div>
        );
    }
}

class LoadMoreButton extends React.Component {
    onLoadMoreClick() {
        alert("Esta función no está disponible. :( ");
    }
    render() {
        return (
            <div className="btn-container">
                 <button onClick={this.onLoadMoreClick} className="btn" id="load-more">More!</button>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));