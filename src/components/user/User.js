export default function User({item, userDetails}) {

    return (
        <div>
            {item.id}. {item.name}
            <button onClick={() => {
                userDetails(item)
            }}>details
            </button>
        </div>
    )
}