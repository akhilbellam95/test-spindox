import './avatar.scss';

const Avatar = (props) => {
    return <div>
        <img className="avatar-image" src={props.data.picture.large} alt={props.data.name.first} />
    </div>
}

export default Avatar;