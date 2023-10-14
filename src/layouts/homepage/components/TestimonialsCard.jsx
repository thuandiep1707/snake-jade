

import './testimonialscard.scss'

const TestimonialsCard = ({value}) => {
    console.log(value.date)
    return(
        <div className="testimonialscard">
            <div className="testimonialscard_user">
                <img src={value.avatar} alt="" className="testimonialscard_user_avt" />
                <p className="testimonialscard_user_name">{value.name}</p>
            </div>
            <div className="testimonialscard_stars">
                {[...Array(value.rate)].map(()=><i className="fa-solid fa-star" style={{color: "#F2BC1B", fontSize: '16px'}}/>)}
                {[...Array(5 - value.rate)].map(()=><i className="fa-solid fa-star" style={{color: "#c7cedb", fontSize: '16px', opacity: '0.7'}}/>)}
            </div>
            <div className="testimonialscard_comment">{value.comment}</div>
            <div className="testimonialscard_date">{value.date}</div>
        </div>
    )
}

export default TestimonialsCard;