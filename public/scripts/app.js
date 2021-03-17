"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            imageData: [{
                imageLink: "https://d.newsweek.com/en/full/607719/djt.jpg?w=790&f=082fb7486866b8a7efcddfcfb30cf017",
                text: "Ahora"
            }, {
                imageLink: "https://lh3.googleusercontent.com/proxy/4OV_EHRJd5JDz41eQvsrCZB6X8i01JJ41A2doelIKhpUyZdP40EhjmHcf6cRwXxHq6j2AKrbWnqgyxGC3YNRyvPXQ-w21R4th9GHzjsZ1Oi2AotJPVU",
                text: "Es"
            }, {
                imageLink: "https://d.newsweek.com/en/full/607858/adsgads.jpg",
                text: "Tu turno"
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Gallery, { imageData: this.state.imageData }),
                React.createElement(LoadMoreButton, null)
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("header", null),
                React.createElement(
                    "div",
                    { className: "title-container" },
                    React.createElement(
                        "h1",
                        null,
                        "cat facts"
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Gallery = function (_React$Component3) {
    _inherits(Gallery, _React$Component3);

    function Gallery() {
        _classCallCheck(this, Gallery);

        return _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).apply(this, arguments));
    }

    _createClass(Gallery, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "gallery" },
                this.props.imageData.map(function (image) {
                    return React.createElement(Card, {
                        imageLink: image.imageLink,
                        catFact: image.text
                    });
                })
            );
        }
    }]);

    return Gallery;
}(React.Component);

var Card = function (_React$Component4) {
    _inherits(Card, _React$Component4);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card" },
                React.createElement(
                    "div",
                    { className: "card-image" },
                    React.createElement("img", { src: this.props.imageLink })
                ),
                React.createElement(
                    "div",
                    { className: "cat-fact" },
                    this.props.catFact
                )
            );
        }
    }]);

    return Card;
}(React.Component);

var LoadMoreButton = function (_React$Component5) {
    _inherits(LoadMoreButton, _React$Component5);

    function LoadMoreButton() {
        _classCallCheck(this, LoadMoreButton);

        return _possibleConstructorReturn(this, (LoadMoreButton.__proto__ || Object.getPrototypeOf(LoadMoreButton)).apply(this, arguments));
    }

    _createClass(LoadMoreButton, [{
        key: "onLoadMoreClick",
        value: function onLoadMoreClick() {
            alert("Esta función no está disponible. :( ");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "btn-container" },
                React.createElement(
                    "button",
                    { onClick: this.onLoadMoreClick, className: "btn", id: "load-more" },
                    "More!"
                )
            );
        }
    }]);

    return LoadMoreButton;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
