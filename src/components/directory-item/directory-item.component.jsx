import { useNavigate } from 'react-router-dom'

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
    const { title, imageUrl, route } = category
    const navigate = useNavigate()

    const navigateHanlder = () => navigate(route)

    return (
    <DirectoryItemContainer onClick={navigateHanlder}>
        <BackgroundImage alt="bg-img" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <Body className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
        </Body>
    </DirectoryItemContainer>
    )
}

export default DirectoryItem