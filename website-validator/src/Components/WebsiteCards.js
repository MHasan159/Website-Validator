

//Website card child component of Website List
   //Renders all the websites in a list to view
   //Name, img, likes, brief description, category, verified as a checkmark or x
export default function WebsiteCards({ website }) {
    const {name, image, description, category, verified} = website

    return (
        
        <li className="card">

            <div className="verified">{verified}</div>

            <br></br>
            <br></br>

            <div className="site-image">
                <img src={image} alt={name} />
            </div>

            <strong>Description:</strong>
            <div className="details">
                <p>{description}</p>
                <p>Add link here</p>
                <div><strong>Tags:</strong> {category}</div>
            </div>

            
        </li>
    )
}
