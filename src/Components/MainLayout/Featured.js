import featured from "../../assets/featured.mp4";

const Featured = () => {
    return (
        <div className="featured" id = "whatWeDo">
            <h1>What We Do</h1>
            <p className = "font-memphis">If a picture is worth a thousand words, then a video is worth a million. </p>
            <p >Check out our featured video!</p>
            <video controls>
                <source src={featured} type="video/mp4" />
            </video>
        </div>
    );
}

export default Featured;