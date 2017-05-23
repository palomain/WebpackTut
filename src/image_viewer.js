
import '../styles/image_viewer.css';
import small from '../assets/image_small.jpg';


export default  () => {
    const image = document.createElement('img');
    image.src = small;

    document.body.append(image);
}