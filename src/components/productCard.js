import React from 'react';

class ProductCard extends React.Component {

    state = { desc: false };

    openDesc = () => {

        this.setState({ desc: !this.state.desc });
    };

    renderDesc() {

        return (
            <div className="card">

                <img src={this.props.image} width="100" height="100" />
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <button className="btn btn-warning" onClick={this.openDesc}>Скрыть</button>

            </div>
        );
    }

    render() {

        if (this.state.desc) {
            this.renderDesc();
        }

        else {
            return (
                <div className="card">

                    <img src={this.props.image} width="80" height="80" />
                    <h1>{this.props.title}</h1>
                    <span className="badge badge-success">{this.props.price} грн.</span>
                    <button className="btn btn-primary" onClick={this.openDesc}>Подробнее</button>

                </div>
            );
        }
    }
}

export default ProductCard;