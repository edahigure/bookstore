export default function Book (props) {
    return (
        <div>
            <div>
            author: {props.author}
            </div>
            <div>
            Title: {props.title} 
            </div>              
            <button> Remove </button>
        </div>
    );

} 