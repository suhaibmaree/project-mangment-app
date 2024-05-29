import './sidebar.scss'

export default function Sidebar() {
    return (
        <aside className='sidebar bg-stone-900 text-stone-50 md:w-72'>
            <h2 className='sidebar-title md:text-xl text-stone-200'>Projects</h2>
            <button className='sidebar-add-project bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>+ Add project</button>
            <ul>

            </ul>
        </aside>
    )
}