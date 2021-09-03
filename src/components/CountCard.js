const CountCard = () => {
    return(
        <div className="card-deck">
            <div className="card text-white bg-danger mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Danger card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-warning mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Warning card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-success mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Warning card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Warning card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default CountCard;