import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { updateRestaurant } from "../../services/restaurant.service";
import toast from "react-hot-toast";
import { uploadImage } from "../../services/upload.service";

import { getRestaurant } from "../../services/restaurant.service";
import { getWeekendSpecials } from "../../services/restaurant.service";

import "./Restaurant.css";
import { createWeekendSpecial, deleteWeekendSpecial, updateWeekendSpecial } from "../../services/weekend.service";

const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" }
];

function Restaurant() {

    const navigate = useNavigate();

    const { restaurantId } = useParams();

    const [logoPreview, setLogoPreview] = useState("");

    const [coverPreview, setCoverPreview] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [weekendPreview, setWeekendPreview] = useState("");
    const queryClient = useQueryClient();

    const [isEditMode, setIsEditMode] = useState(false);

    const [selectedWeekend, setSelectedWeekend] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue
    } = useForm();

    const {
        register: weekendRegister,
        handleSubmit: handleWeekendSubmit,
        reset: resetWeekend,
        setValue: setWeekendValue
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            image: "",
            price: ""
        }
    });

    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ["restaurant", restaurantId],
        queryFn: () => getRestaurant(restaurantId)
    });

    console.log(data)

    const {
        data: weekendData,
        isLoading: weekendLoading,
        error: weekendError
    } = useQuery({
        queryKey: ["weekend-specials", restaurantId],
        queryFn: () => getWeekendSpecials(restaurantId)
    });

    console.log(weekendData)

    useEffect(() => {

        if (data?.restaurant) {

            reset(data.restaurant);

            setLogoPreview(data.restaurant.logo);

            setCoverPreview(data.restaurant.coverImage);

        }

    }, [data, reset]);

    const handleLogoUpload = async (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        try {

            const response = await uploadImage(file);

            setLogoPreview(response.imageUrl);

            setValue("logo", response.imageUrl);

            toast.success("Logo uploaded successfully.");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to upload logo."
            );

        }

    };

    const handleCoverUpload = async (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        try {

            const response = await uploadImage(file);

            setCoverPreview(response.imageUrl);

            setValue("coverImage", response.imageUrl);

            toast.success("Cover image uploaded successfully.");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to upload cover image."
            );

        }

    };

    const handleWeekendImageUpload = async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        try {

            const response = await uploadImage(file);

            setWeekendPreview(response.imageUrl);

            setWeekendValue(
                "image",
                response.imageUrl
            );

            toast.success("Image uploaded successfully.");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Image upload failed."
            );

        }

    };

    const onSubmit = async (formData) => {

        try {

            const response = await updateRestaurant(
                restaurantId,
                formData
            );

            toast.success(response.message);

            console.log('data', response)

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update restaurant."
            );

        }

    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Something went wrong.</h2>;
    }

    const closeWeekendModal = () => {

        resetWeekend();

        setWeekendPreview("");

        setSelectedWeekend(null);

        setIsEditMode(false);

        setIsModalOpen(false);

    };

    const onCreateWeekend = async (formData) => {

        try {

            console.log(formData)

            const response = await createWeekendSpecial(
                restaurantId,
                formData
            );

            toast.success(response.message);

            resetWeekend();

            setWeekendPreview("");

            setIsModalOpen(false);

            queryClient.invalidateQueries({
                queryKey: ["weekend-specials", restaurantId]
            });

            closeWeekendModal()

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create weekend special."
            );

        }

    };

    const handleEditWeekend = (weekend) => {

        setSelectedWeekend(weekend);

        setIsEditMode(true);

        setWeekendPreview(weekend.image);

        resetWeekend({
            title: weekend.title,
            description: weekend.description,
            image: weekend.image,
            price: weekend.price
        });

        setIsModalOpen(true);

    };

    const onUpdateWeekend = async (formData) => {

        try {

            const response = await updateWeekendSpecial(
                selectedWeekend._id,
                formData
            );

            toast.success(response.message);

            closeWeekendModal();

            setIsEditMode(false);

            setSelectedWeekend(null);

            queryClient.invalidateQueries({
                queryKey: ["weekend-specials", restaurantId]
            });

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update weekend special."
            );

        }

    };

    const handleDeleteWeekend = async (weekendSpecialId) => {

        const isConfirmed = window.confirm(
            "Are you sure you want to delete this weekend special?"
        );

        if (!isConfirmed) {
            return;
        }

        try {

            const response = await deleteWeekendSpecial(
                weekendSpecialId
            );

            toast.success(response.message);

            queryClient.invalidateQueries({
                queryKey: ["weekend-specials", restaurantId]
            });

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete weekend special."
            );

        }

    };

    return (

        <div className="restaurant-page">

            <div className="restaurant-header">

                <button
                    className="back-btn"
                    onClick={() => navigate("/admin/dashboard")}
                >
                    ← Back
                </button>

                <h1>
                    {data.restaurant.branchName}
                </h1>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="section">

                    <h2>Restaurant Information</h2>

                    <div className="form-group">

                        <label>Branch Name</label>

                        <input
                            type="text"
                            placeholder="Enter Branch Name"
                            {...register("branchName", {
                                required: "Branch Name is required"
                            })}
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            rows="5"
                            placeholder="Enter Description"
                            {...register("description")}
                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Phone Number</label>

                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                {...register("phone")}
                            />

                        </div>

                        <div className="form-group">

                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                {...register("email")}
                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Address</label>

                        <textarea
                            rows="4"
                            placeholder="Enter Restaurant Address"
                            {...register("address")}
                        />

                    </div>

                </div>

                <div className="section">

                    <h2>Restaurant Images</h2>

                    <div className="image-container">

                        <div className="image-card">

                            <label>Restaurant Logo</label>

                            <img
                                src={
                                    logoPreview ||
                                    "https://placehold.co/200x200?text=Logo"
                                }
                                alt="Restaurant Logo"
                                className="image-preview"
                            />

                            <input
                                type="file"
                                id="logo"
                                accept="image/*"
                                hidden
                                onChange={handleLogoUpload}
                            />

                            <button
                                type="button"
                                onClick={() => document.getElementById("logo").click()}
                            >
                                Change Logo
                            </button>

                        </div>

                        {/* <div className="image-card">

                            <label>Cover Image</label>

                            <img
                                src={
                                    coverPreview ||
                                    "https://placehold.co/500x250?text=Cover+Image"
                                }
                                alt="Cover"
                                className="cover-preview"
                            />

                            <input
                                type="file"
                                id="coverImage"
                                accept="image/*"
                                hidden
                                onChange={handleCoverUpload}
                            />

                            <button
                                type="button"
                                onClick={() => document.getElementById("coverImage").click()}
                            >
                                Change Cover Image
                            </button>

                        </div> */}

                    </div>

                </div>

                {/* <div className="section">

                    <h2>Restaurant Links</h2>

                    <div className="form-group">

                        <label>Clover Link</label>

                        <input
                            type="url"
                            placeholder="https://..."
                            {...register("cloverLink")}
                        />

                    </div>

                    <div className="form-group">

                        <label>Delivery Link</label>

                        <input
                            type="url"
                            placeholder="https://..."
                            {...register("deliveryLink")}
                        />

                    </div>

                    <div className="form-group">

                        <label>Google Map Link</label>

                        <input
                            type="url"
                            placeholder="https://..."
                            {...register("googleMap")}
                        />

                    </div>

                    <div className="form-group">

                        <label>Facebook Link</label>

                        <input
                            type="url"
                            placeholder="https://..."
                            {...register("facebook")}
                        />

                    </div>

                    <div className="form-group">

                        <label>Instagram Link</label>

                        <input
                            type="url"
                            placeholder="https://..."
                            {...register("instagram")}
                        />

                    </div>

                </div> */}

                <div className="section">

                    <h2>Business Hours</h2>

                    {days.map((day) => (

                        <div key={day.key} className="business-hour-card">

                            <h3>{day.label}</h3>

                            <div className="checkbox-group">
                                <input
                                    type="checkbox"
                                    id={`${day.key}-open`}
                                    {...register(`businessHours.${day.key}.isOpen`)}
                                />
                                <label htmlFor={`${day.key}-open`}>Open</label>
                            </div>

                            <div className="time-row">
                                <div className="form-group">
                                    <label>Open</label>
                                    <input
                                        type="time"
                                        {...register(`businessHours.${day.key}.open`)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Close</label>
                                    <input
                                        type="time"
                                        {...register(`businessHours.${day.key}.close`)}
                                    />
                                </div>
                            </div>

                        </div>

                    ))}

                </div>

                <div className="section">

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Save Changes
                    </button>

                </div>

            </form>

            <div className="section">

                <div className="section-header">

                    <h2>Weekend Specials</h2>

                    <button
                        type="button"
                        className="add-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Weekend Special
                    </button>
                </div>

            </div>

            {
                weekendData?.weekendSpecial?.length === 0 ? (

                    <div className="empty-state">

                        <h3>No Weekend Specials</h3>

                        <p>
                            Click "Add Weekend Special" to create one.
                        </p>

                    </div>

                ) : (
                    <div className="weekend-grid">
                        {weekendData?.weekendSpecial?.map((item) => (
                            <div
                                className="weekend-card"
                                key={item._id}
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="weekend-image"
                                />

                                <div className="weekend-content">

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <p>

                                        Price :

                                        <strong>

                                            {item.price}

                                        </strong>

                                    </p>

                                </div>

                                <div className="weekend-actions">

                                    <button
                                        type="button"
                                        className="edit-btn"
                                        onClick={() => handleEditWeekend(item)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="delete-btn"
                                        onClick={() => handleDeleteWeekend(item._id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}
                    </div>
                )
            }

            {
                isModalOpen && (
                    <div
                        className="modal-overlay"
                        onClick={() => setIsModalOpen(false)}
                    >

                        <div
                            className="modal"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="weekend-modal-title"
                        >

                            <div className="modal-header">

                                <h2 id="weekend-modal-title">{isEditMode
                                    ? "Edit Weekend Special"
                                    : "Add Weekend Special"}</h2>



                            </div>

                            <form
                                onSubmit={
                                    handleWeekendSubmit(
                                        isEditMode
                                            ? onUpdateWeekend
                                            : onCreateWeekend
                                    )
                                }
                                className="modal-form"
                            >

                                <div className="modal-body">

                                    <div className="form-group">

                                        <label>Title</label>

                                        <input
                                            type="text"
                                            placeholder="Enter Title"
                                            {...weekendRegister("title", {
                                                required: "Title is required"
                                            })}
                                        />

                                    </div>

                                    <div className="form-group">

                                        <label>Description</label>

                                        <textarea
                                            rows="4"
                                            placeholder="Enter Description"
                                            {...weekendRegister("description")}
                                        />

                                    </div>

                                    <div className="form-group">

                                        <label>Image</label>

                                        {weekendPreview && (
                                            <img
                                                src={weekendPreview}
                                                alt="Weekend Preview"
                                                className="weekend-preview"
                                            />
                                        )}

                                        <input
                                            type="file"
                                            id="weekendImage"
                                            hidden
                                            accept="image/*"
                                            onChange={handleWeekendImageUpload}
                                        />

                                        <button
                                            type="button"
                                            className="upload-btn"
                                            onClick={() =>
                                                document
                                                    .getElementById("weekendImage")
                                                    .click()
                                            }
                                        >
                                            Upload Image
                                        </button>

                                    </div>

                                    <div className="checkbox-group">

                                        <input
                                            type="name"
                                            id="price"
                                            {...weekendRegister("price")}
                                        />

                                        <label htmlFor="available">
                                            Price
                                        </label>

                                    </div>

                                </div>

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={closeWeekendModal}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="save-btn"
                                    >
                                        {
                                            isEditMode
                                                ? "Update Weekend Special"
                                                : "Save Weekend Special"
                                        }
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>
                )
            }

        </div>

    );

}

export default Restaurant;