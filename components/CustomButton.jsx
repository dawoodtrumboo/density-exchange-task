export default function CustomButton(props){
    return(
        <button className="bg-black text-white rounded-full px-5 py-2 text-[13px]">
            {props.name}
        </button>
    )
}