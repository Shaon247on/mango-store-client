import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, chef, supplier, taste, category, details, photo, _id } = coffee

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl mx-16">
            <figure><img src={photo} alt="Movie" className="w-40" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-between items-center">
                    <div>
                        <p><span className="font-bold">Chef:</span> {chef}</p>
                        <p><span className="font-bold">Taste:</span> {taste}</p>
                        <p><span className="font-bold">Details:</span>{details}</p>
                        <p><span className="font-bold">ID:</span>{_id.slice(0, 15)}...</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical">
                            <button className="btn join-item">View</button>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item btn-warning">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;