import CollectionChild from './collectionChild'
import { newCollectionData } from '../constants'
const CollectionContainer = () => {
    return (
        <>
            <section className='mt-20'>
                <h2 className='conatiner_name'>New Collection 2024</h2>
                <div className='flex  flex-wrap items-center gap-8'>
                    {newCollectionData.map((elem, index) => (
                        <CollectionChild elem={elem} idx={index} />
                    ))}
                </div>
            </section>
        </>
    )
}
export default CollectionContainer
