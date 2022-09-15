import './Space.css';

export default function Space({item}) {
    return (
        <div className={'wrap'}>
            {item.mission_name} {item.launch_year} <img className={'picture'} src={item.links.mission_patch_small} alt="photo"/>
        </div>
    )
}