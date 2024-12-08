// Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
            <div className="dashboard">
                <div className="card-section">
    <div className="card">
        <div className="card-content">
        <img
            className="card-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIVQFOGMh3gfUK7VTXE4p9ESucRUuYQ5qig&s"
            alt="Tourism"
        />
        <p className="card-paragraph">Tourist Places</p>
        <a href="tourism">
            <button className="card-button">Explore</button>
        </a>
        </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img className="card-image" src="https://images.unsplash.com/photo-1566578312612-d903c67c4ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwdG91cmlzbSUyMDE1MHgxNTB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Indian Festival Calendar" />
                        <p className="card-paragraph">Indian Festival Calendar</p>
                        <a href="Calendar"><button className="card-button">Explore</button></a>
                    </div>
                </div>
                <div className="card">
        <div className="card-content">
            <img className="card-image" src="https://www.templepurohit.com/wp-content/uploads/2022/04/History-of-Indian-Temples.jpg" alt="Temples" />
            <p className="card-paragraph">Temples</p>
            <a href="temples"><button className="card-button">Explore</button></a>
        </div>
    </div>
    <div className="card">
    <div className="card-content">
        <img className="card-image" src="https://education.sakshi.com/sites/default/files/images/2022/11/29/dance-1669708207.jpg" alt="Indian Dance Culture" />
        <p className="card-paragraph">Indian Dance Culture</p>
        <a href="dance"><button className="card-button">Explore</button></a>
    </div>
</div>

                <div className="card">
                    <div className="card-content">
                        <img className="card-image" src="https://images.unsplash.com/photo-1519955266818-0231b63402bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Modern India" />
                        <p className="card-paragraph">Modern India</p>
                        <a href="modernindia"><button className="card-button">Explore</button></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img className="card-image" src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Indian Front Liners" />
                        <p className="card-paragraph">Indian Front Liners</p>
                        <a href="tourism.html"><button className="card-button">Explore</button></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img className="card-image" src="https://www.trocals.com/wp-content/uploads/2022/08/madhubani-painting.webp" alt="Art Forms" />
                        <p className="card-paragraph">Art Forms</p>
                        <a href="indianartforms"><button className="card-button">Explore</button></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wVhxo4hgqw_tLjwITTZUqRdpg7DNYYAkEQ&usqp=CAU" alt="Historical Monument" />
                        <p className="card-paragraph">Historical Monument</p>
                        <a href="historal_momunents.html"><button className="card-button">Explore</button></a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <img className="card-image" src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS" alt="Food" />
                        <p className="card-paragraph">Food</p>
                        <a href="food_card.html"><button className="card-button">Explore</button></a>
                    </div>
                </div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
}

export default Dashboard;
