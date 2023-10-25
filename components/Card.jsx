export default function Card(props){
    
    
    const cardStyle = {
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        transform: props.transform,
        height: props.height, 
      };

    return(
        

        <div className="w-[300px] p-6 rounded-[12px]" style={cardStyle} >
          <div className="text-4xl mb-4">
              {props.emoji}
          </div>
          <h3 className="font-semibold">{props.heading}</h3>
          <p className="text-sm font-light">
            {props.para}
          </p>
        </div>
      
    )
}