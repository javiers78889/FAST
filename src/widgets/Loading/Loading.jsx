import ags from '../../img/ags.png'
export const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"><img src={ags} alt="" /></div>
        </div>
    )
}
