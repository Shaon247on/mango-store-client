import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo, _id } = coffee

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = event.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = { name, chef, supplier, taste, category, details, photo }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Coffee updated successfully!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })
    }
    return (
        <div>
            <h2>Update: {name}</h2>
            <div>
                <h2 className="text-center mt-10 text-4xl font-serif font-bold">Add Coffee</h2>
                <div>
                    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                        <form onSubmit={handleUpdateCoffee} className="container flex flex-col mx-auto space-y-12 justify-center items-center w-[300px] md:w-[1000px]">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="name" className="text-sm">Name</label>
                                        <input
                                            defaultValue={name}
                                            name="name" type="text" placeholder="Coffee name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="chef" className="text-sm">Chef</label>
                                        <input
                                            defaultValue={chef}
                                            name="chef" type="text" placeholder="chef name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="supplier" className="text-sm">Supplier</label>
                                        <input
                                            defaultValue={supplier}
                                            name="supplier" type="text" placeholder="supplier" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="taste" className="text-sm">Taste</label>
                                        <input
                                            defaultValue={taste}
                                            name="taste" type="text" placeholder="taste" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="category" className="text-sm">Category</label>
                                        <input
                                            defaultValue={category}
                                            name="category" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label htmlFor="details" className="text-sm">Details</label>
                                        <input
                                            defaultValue={details}
                                            name="details" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>

                                    {/* photo URL */}
                                    <div className="col-span-full sm:col-span-2">
                                        <label htmlFor="photo" className="text-sm">Photo</label>
                                        <input
                                            defaultValue={photo}
                                            name="photo" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                    </div>
                                    <div className="col-span-full " >
                                        <input type="submit" placeholder="" className="h-10   w-full hover:rounded-3xl transform duration-300 bg-orange-400 ease-in-out" />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;