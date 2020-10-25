import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">
                test
            </div>

            <div className="mainContent">
                <h1>Uniquely yours</h1>
                <div className="cardWrap">
                    <div className="card">
                        <div className="cardImage">
                            <img
                                src="https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                                alt="Picture" />
                        </div>

                        <div className="cardContent">
                            <h3>Liked songs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
