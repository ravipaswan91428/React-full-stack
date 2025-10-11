
function User({ useRole, description, price, place }) {

    return (
        <div className="p-8">
          <h3 className="font-semibold text-xl">{useRole}</h3>
          <p className=" text-gray-400 mt-2 text-xxl leading-7">{description}</p>
          <div className="mt-5">
            <span className="font-medium">{price}</span>
            <span className="p-8 text-gray-400">{place}</span>
          </div>
        </div>
    )
}

export default User;
