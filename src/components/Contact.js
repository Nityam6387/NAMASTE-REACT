const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
            <form>
                <input className = "border-2 border-black m-2 p-2" type="text" placeholder="Name..."></input>
                 <input className = "border-2 border-black m-2 p-2" type="text" placeholder="Password..."></input>
                 <button className = "rounded-2xl border-2 border-black m-4 p-4 bg-gray-100" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;