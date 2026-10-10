import React, { useEffect } from 'react'
import { getRestaurants } from '../../services/restaurant.service';
import { useQuery } from '@tanstack/react-query';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth.service';
import toast from 'react-hot-toast';

function Dashboard() {

    const navigate = useNavigate();

    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ["restaurants"],
        queryFn: getRestaurants
    });


    useEffect(() => {
        console.log('dat',data?.restaurants[0]?._id)

        const restaurantId = localStorage.getItem("restaurantId")

        if(!restaurantId){
            localStorage.setItem("restaurantId", data?.restaurants[0]?._id)
        }

    } ,[data])

    const handleLogout = async () => {

        try {

            const response = await logout();

            localStorage.removeItem("token");

            toast.success(response.message);

            navigate("/");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Logout failed."
            );

        }

    };

  

    const totalRestaurants = data?.restaurants?.length || 0;

    return (
        <div className="dashboard">
            <div className="dashboard-shell">
                <div className="dashboard-header">
                    <div className="dashboard-heading">
                        <p className="dashboard-kicker">Restaurant Management</p>
                        <h1>Restaurant Dashboard</h1>
                        <p className="dashboard-subtitle">
                            Manage your restaurant branches with a clean and professional admin view.
                        </p>
                    </div>

                    <div className="header-actions">
                        {/* <span className="live-indicator">Live operations</span> */}
                        <button
                            type="button"
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            <span aria-hidden="true">↪</span> Logout
                        </button>
                    </div>
                </div>

                {/* <div className="dashboard-metrics">
                    <div className="metric-card">
                        <span>Total branches</span>
                        <strong>{totalRestaurants}</strong>
                    </div>
                    <div className="metric-card">
                        <span>Open now</span>
                        <strong>{totalRestaurants > 0 ? '01' : '00'}</strong>
                    </div>
                    <div className="metric-card">
                        <span>Admin status</span>
                        <strong>Active</strong>
                    </div>
                </div> */}

                <div className="dashboard-toolbar">
                    <div>
                        <p className="section-label">Branches</p>
                        <h2>Restaurant locations</h2>
                    </div>
                    {/* {!isLoading && !error && (
                        <span className="branch-count">{totalRestaurants} total</span>
                    )} */}
                </div>

                {isLoading && <p className="status-message">Loading restaurants...</p>}
                {error && <p className="status-message error">Unable to load restaurants right now.</p>}

                <div className="restaurant-list">
                    {data?.restaurants?.length > 0 ? (
                        data.restaurants.map((restaurant) => (
                            <article
                                className="restaurant-card"
                                key={restaurant._id}
                            >
                                <div className="card-image-wrap">
                                    <div className="brand-ring">
                                        <img src={restaurant?.logo} alt={restaurant?.branchName || "Restaurant logo"} />
                                    </div>
                                </div>

                                <div className="restaurant-card-content">
                                    <div className="restaurant-main-row">
                                        <div>
                                            <p className="branch-label">Main Branch</p>
                                            <h3>{restaurant.branchName}</h3>
                                        </div>
                                        {/* <span className="status-pill">Open</span> */}
                                    </div>

                                    <p className="restaurant-address">
                                        <span aria-hidden="true">⌖</span>
                                        {restaurant?.address || "Address not provided"}
                                    </p>

                                    <div className="restaurant-actions">
                                        <button
                                            type="button"
                                            className="manage-btn"
                                            onClick={() => navigate(`/admin/restaurants/${restaurant._id}`)}
                                        >
                                            Manage branch <span aria-hidden="true">→</span>
                                        </button>
                                    </div>
                                </div>

                                {/* <a
                                    className="whatsapp-fab"
                                    href={`https://wa.me/919884292625?text=${encodeURIComponent('Hi Masala Cafe, I would like to know more about your restaurant.')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Chat on WhatsApp"
                                >
                                    WhatsApp
                                </a> */}
                            </article>
                        ))
                    ) : (
                        !isLoading && !error && (
                            <div className="empty-state">
                                <h3>No restaurants found</h3>
                                <p>Add a restaurant to see it appear here.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard
