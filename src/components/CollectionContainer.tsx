import CollectionChild from './collectionChild'
import { newCollectionData } from '../constants'
const CollectionContainer = () => {
    return (
        <>
            <section className='px-16 mt-20 md:px-24'>
                <h2 className='text-2xl font-semibold text-text_color mb-8'>
                    New Collection 2024
                </h2>
                <div className='flex flex-wrap items-center gap-8'>
                    {newCollectionData.map((elem, index) => (
                        <CollectionChild elem={elem} idx={index} />
                    ))}
                </div>
            </section>
        </>
    )
}
export default CollectionContainer
