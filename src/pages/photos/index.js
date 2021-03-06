import React from "react";
import {connect} from "react-redux";
import {getPhotos} from "../../actions/photos";
import {Link} from "react-router-dom";


class Photos extends React.Component {
    componentDidMount() {
        this.props.getPhotos();
    }


    render() {
        const {isLoading, photos} =this.props;

        return isLoading ? <h3>Loading...</h3> : (
            <div>{photos.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <Link to={`/photos/${item.id}`}>
                        <img src={item.url} alt={item.id}/>
                    </Link>
                </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = ({photosReducer: {isLoading, photos}}) => ({isLoading: isLoading, photos: photos});
const mapDispatchToProps = {
    getPhotos
}

export const PhotosContainer = connect(mapStateToProps, mapDispatchToProps)(Photos);